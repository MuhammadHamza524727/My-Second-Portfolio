from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import psycopg2
import os
import resend
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Portfolio Backend")

resend.api_key = os.getenv("RESEND_API_KEY", "")
OWNER_EMAIL = os.getenv("OWNER_EMAIL", "")

ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://*.vercel.app",
    "https://*.hf.space",
]
frontend_url = os.getenv("FRONTEND_URL", "")
if frontend_url:
    ALLOWED_ORIGINS.append(frontend_url)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_origin_regex=r"https://.*\.(vercel\.app|hf\.space)$",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db_connection():
    return psycopg2.connect(os.getenv("DATABASE_URL"))


def init_db():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS contacts (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            subject TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT NOW()
        )
    """)
    conn.commit()
    cur.close()
    conn.close()


@app.on_event("startup")
def startup_event():
    init_db()


class ContactForm(BaseModel):
    name: str
    email: str
    subject: str
    message: str


@app.get("/")
def root():
    return {"status": "Portfolio API is running"}


def send_owner_notification(form: ContactForm, ref_id: str, sent_at: str):
    """Email to owner — new message alert"""
    if not OWNER_EMAIL or not resend.api_key:
        return
    try:
        resend.Emails.send({
            "from": "Portfolio Contact <onboarding@resend.dev>",
            "to": OWNER_EMAIL,
            "subject": f"📬 New Message: {form.subject}",
            "html": f"""
            <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;background:#022C43;color:#fff;border-radius:8px;">
              <h2 style="color:#fbbf24;">New Contact Form Submission</h2>
              <table style="width:100%;border-collapse:collapse;margin-top:16px;">
                <tr><td style="padding:8px 0;color:#94a3b8;">Reference</td><td style="color:#fbbf24;font-weight:bold;">{ref_id}</td></tr>
                <tr><td style="padding:8px 0;color:#94a3b8;">Name</td><td>{form.name}</td></tr>
                <tr><td style="padding:8px 0;color:#94a3b8;">Email</td><td>{form.email}</td></tr>
                <tr><td style="padding:8px 0;color:#94a3b8;">Subject</td><td>{form.subject}</td></tr>
                <tr><td style="padding:8px 0;color:#94a3b8;">Sent At</td><td>{sent_at}</td></tr>
              </table>
              <div style="margin-top:16px;padding:16px;background:#03395c;border-radius:6px;">
                <p style="color:#94a3b8;margin:0 0 8px;">Message:</p>
                <p style="margin:0;">{form.message}</p>
              </div>
            </div>
            """,
        })
    except Exception:
        pass  # Email failure should not break the API


def send_auto_reply(form: ContactForm, ref_id: str, sent_at: str):
    """Auto-reply — sent to OWNER_EMAIL on free tier (no custom domain yet)"""
    if not resend.api_key or not OWNER_EMAIL:
        return
    try:
        resend.Emails.send({
            "from": "Muhammad Hamza <onboarding@resend.dev>",
            "to": OWNER_EMAIL,  # free tier: only verified email works as recipient
            "subject": f"Got your message! [{ref_id}]",
            "html": f"""
            <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;background:#022C43;color:#fff;border-radius:8px;">
              <h2 style="color:#fbbf24;">Hey {form.name}! 👋</h2>
              <p style="color:#cbd5e1;">Thanks for reaching out. I've received your message and will get back to you within <strong style="color:#fbbf24;">24 hours</strong>.</p>

              <div style="margin-top:20px;padding:16px;background:#03395c;border-radius:6px;border-left:3px solid #fbbf24;">
                <p style="margin:0 0 6px;color:#94a3b8;font-size:13px;">Your submission details:</p>
                <p style="margin:0;font-size:13px;"><span style="color:#94a3b8;">Reference ID:</span> <strong style="color:#fbbf24;">{ref_id}</strong></p>
                <p style="margin:4px 0 0;font-size:13px;"><span style="color:#94a3b8;">Subject:</span> {form.subject}</p>
                <p style="margin:4px 0 0;font-size:13px;"><span style="color:#94a3b8;">Sent at:</span> {sent_at}</p>
              </div>

              <p style="margin-top:20px;color:#64748b;font-size:12px;">— Muhammad Hamza · Web Developer</p>
            </div>
            """,
        })
    except Exception:
        pass


@app.post("/api/contact")
def submit_contact(form: ContactForm):
    if not form.name.strip() or not form.email.strip() or not form.subject.strip() or not form.message.strip():
        raise HTTPException(status_code=400, detail="All fields are required")

    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO contacts (name, email, subject, message) VALUES (%s, %s, %s, %s) RETURNING id, created_at",
            (form.name, form.email, form.subject, form.message),
        )
        row = cur.fetchone()
        conn.commit()
        cur.close()
        conn.close()

        db_id = row[0]
        created_at = row[1]
        ref_id = f"HMZ-{db_id:04d}"
        sent_at = created_at.strftime("%B %d, %Y — %I:%M %p") if created_at else ""

        # Send emails (non-blocking — failures are silently ignored)
        send_owner_notification(form, ref_id, sent_at)
        send_auto_reply(form, ref_id, sent_at)

        return {
            "success": True,
            "ref_id": ref_id,
            "sent_at": sent_at,
            "message": "Your message has been received!",
        }
    except Exception:
        raise HTTPException(status_code=500, detail="Database error. Please try again.")


@app.get("/api/contacts")
def get_contacts():
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("SELECT id, name, email, subject, message, created_at FROM contacts ORDER BY created_at DESC")
        rows = cur.fetchall()
        cur.close()
        conn.close()
        return [
            {
                "id": r[0],
                "ref_id": f"HMZ-{r[0]:04d}",
                "name": r[1],
                "email": r[2],
                "subject": r[3],
                "message": r[4],
                "created_at": r[5].isoformat() if r[5] else None,
            }
            for r in rows
        ]
    except Exception:
        raise HTTPException(status_code=500, detail="Could not fetch contacts")
