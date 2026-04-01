export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "giaic-journey",
    title: "My GIAIC Journey — Quarter 1 Reflections",
    date: "2024-12-15",
    tags: ["GIAIC", "AI", "Learning"],
    excerpt:
      "Starting GIAIC was a turning point. From Python basics to understanding how large language models work — here's what I've learned so far.",
    content: `
Quarter 1 at GIAIC has been intense and rewarding.

We covered Python fundamentals, data types, control flow, and OOP concepts. But the highlight was diving into how AI models are trained — understanding embeddings, tokenization, and prompt engineering at a high level.

**Key takeaways:**
- Python is deceptively simple but powerful
- Generative AI is not magic — it's math + data
- Consistency beats intensity every time

Looking forward to Quarter 2 where we explore agentic systems and cloud-native tools.
    `.trim(),
  },
  {
    slug: "nextjs-portfolio-build",
    title: "Building This Portfolio with Next.js 14",
    date: "2025-01-10",
    tags: ["Next.js", "Tailwind", "Portfolio"],
    excerpt:
      "Why I chose Next.js 14 for my portfolio, what challenges I faced, and the lessons learned from building a full-stack portfolio from scratch.",
    content: `
I wanted a portfolio that felt like *me* — not a template. So I built it from scratch using Next.js 14 App Router.

**Stack choices:**
- **Next.js 14** — App Router, server components, fast routing
- **Tailwind CSS** — Utility-first, fast to prototype
- **FastAPI + Neon DB** — Lightweight Python backend with serverless Postgres
- **Resend** — Email API for the contact form

**Challenges:**
- AOS animations conflicting with Next.js hydration — solved by initializing AOS inside useEffect
- Deploying FastAPI on Hugging Face Spaces — tricky CORS config

The result? A portfolio that loads fast, looks sharp, and has real backend functionality.
    `.trim(),
  },
  {
    slug: "exploring-agentic-ai",
    title: "What is Agentic AI? A Beginner's Take",
    date: "2025-02-20",
    tags: ["AI", "Agents", "LLM"],
    excerpt:
      "Agentic AI is more than just chatbots. It's about systems that can plan, act, and adapt. Here's my beginner understanding of this exciting field.",
    content: `
Until recently, I thought AI was just chatbots. Then GIAIC introduced me to *agentic AI* — and it changed everything.

**What makes an AI "agentic"?**
A regular LLM responds to prompts. An *agent* can:
1. Break down a goal into steps
2. Use tools (search, code execution, APIs)
3. Reflect on its outputs and retry

**Tools I've explored:**
- OpenAI Function Calling
- LangChain agents
- Claude's tool use API

**My current project idea:** An agent that reads my GitHub repos and writes a weekly learning summary. Still building it!

This is the most exciting area in tech right now — and I'm just getting started.
    `.trim(),
  },
  {
    slug: "css-tips-i-wish-i-knew",
    title: "5 CSS Tricks I Wish I Knew Earlier",
    date: "2025-03-05",
    tags: ["CSS", "Frontend", "Tips"],
    excerpt:
      "From CSS variables to the power of `gap` — these are the CSS techniques that made my code cleaner and my layouts better.",
    content: `
After building several projects, here are CSS patterns I now use everywhere:

**1. CSS Custom Properties (Variables)**
\`\`\`css
:root { --accent: #fbbf24; }
button { color: var(--accent); }
\`\`\`

**2. \`gap\` over margins**
Using \`flex\` + \`gap\` is cleaner than margin hacks.

**3. \`clamp()\` for responsive typography**
\`\`\`css
font-size: clamp(1rem, 2.5vw, 2rem);
\`\`\`

**4. \`aspect-ratio\`**
No more padding-top hacks for responsive containers.

**5. Logical properties**
\`margin-inline\`, \`padding-block\` — future-proof and readable.

Small tricks, big impact on code quality.
    `.trim(),
  },
];
