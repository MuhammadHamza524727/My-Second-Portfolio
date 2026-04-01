"use client";

import React, { useState } from "react";

interface ReceiptData {
  ref_id: string;
  sent_at: string;
  name: string;
  subject: string;
  email: string;
}

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [receipt, setReceipt] = useState<ReceiptData | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL
          ? `${process.env.NEXT_PUBLIC_API_URL}/api/contact`
          : "http://localhost:7860/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        const data = await res.json();
        setReceipt({
          ref_id: data.ref_id,
          sent_at: data.sent_at,
          name: form.name,
          subject: form.subject,
          email: form.email,
        });
        setForm({ name: "", email: "", subject: "", message: "" });
        setStatus("idle");
      } else {
        const data = await res.json();
        setErrorMsg(data.detail || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Could not connect to server. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-start justify-center nunito p-7 pb-20 md:pb-7 min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <main className="ml-0 md:ml-20 flex flex-col items-start justify-start text-start w-full max-w-2xl px-4 md:px-8">
        {/* HTML Tags */}
        <div>
          <p className="text-sm text-yellow-600 caveat">&lt;html&gt;</p>
          <p className="text-sm text-yellow-600 md:mb-6 caveat">&lt;body&gt;</p>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-5xl font-bold">
          <p className="text-sm md:mt-6 text-yellow-600 caveat">&lt;h1&gt;</p>
          {"Contact.".split("").map((char, index) => (
            <span
              key={index}
              className="inline-block hover:animate-bump dark:hover:text-white hover:text-[#1a0f02] text-yellow-400"
            >
              {char}
            </span>
          ))}
          <p className="text-sm md:mt-2 text-yellow-600 caveat">&lt;/h1&gt;</p>
        </h1>

        {/* ── RECEIPT (shown after successful submit) ── */}
        {receipt ? (
          <div
            data-aos="zoom-in"
            className="mt-6 w-full border border-yellow-400/40 bg-[var(--bg-card)] rounded-lg p-6 space-y-4"
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-400/20 border border-yellow-400 flex items-center justify-center text-yellow-400 text-xl">
                ✓
              </div>
              <div>
                <p className="font-bold text-yellow-400 text-lg">Message Received!</p>
                <p className="text-gray-400 text-xs">
                  A confirmation email has been sent to{" "}
                  <span className="text-white">{receipt.email}</span>
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[var(--border)]" />

            {/* Details */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Reference ID</span>
                <span className="text-yellow-400 font-bold font-mono">
                  #{receipt.ref_id}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Name</span>
                <span>{receipt.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Subject</span>
                <span>{receipt.subject}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sent at</span>
                <span className="text-gray-300 text-xs">{receipt.sent_at}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[var(--border)]" />

            <p className="text-xs text-gray-500">
              I&apos;ll get back to you within{" "}
              <span className="text-yellow-400">24 hours</span>. Your message
              has been stored securely.
            </p>

            {/* Send another */}
            <button
              onClick={() => setReceipt(null)}
              className="text-xs text-yellow-400 hover:text-yellow-300 underline underline-offset-2 transition-colors"
            >
              Send another message →
            </button>
          </div>
        ) : (
          /* ── FORM ── */
          <>
            <p className="text-gray-400 text-sm mt-2 mb-4">
              Got a project in mind? Fill the form and I&apos;ll get back to you.
            </p>

            {status === "error" && (
              <div className="w-full mb-4 p-3 bg-red-900/40 border border-red-500 rounded-md text-red-400 text-sm">
                ✗ {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-2 space-y-4 w-full">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  data-aos="fade-up"
                  className="p-3 bg-[var(--bg-card)] border border-transparent focus:border-yellow-400 rounded-md text-white outline-none w-full transition-colors placeholder-gray-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  data-aos="fade-up"
                  className="p-3 bg-[var(--bg-card)] border border-transparent focus:border-yellow-400 rounded-md text-white outline-none w-full transition-colors placeholder-gray-500"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                data-aos="fade-up"
                className="p-3 bg-[var(--bg-card)] border border-transparent focus:border-yellow-400 rounded-md text-white outline-none w-full transition-colors placeholder-gray-500"
              />

              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                data-aos="fade-up"
                className="p-3 bg-[var(--bg-card)] border border-transparent focus:border-yellow-400 rounded-md text-white outline-none w-full transition-colors resize-none placeholder-gray-500"
              />

              <p className="text-sm text-yellow-600 caveat">&lt;button&gt;</p>
              <button
                type="submit"
                disabled={status === "loading"}
                data-aos="fade-up"
                className="px-8 py-2 bg-yellow-400 text-[#022C43] rounded-md font-bold hover:bg-yellow-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "SENDING..." : "SEND"}
              </button>
              <p className="text-sm text-yellow-600 caveat">&lt;/button&gt;</p>
            </form>
          </>
        )}

        <div className="text-gray-400 mt-10">
          <p className="text-sm text-yellow-600 caveat">&lt;/body&gt;</p>
          <p className="text-sm text-yellow-600 caveat">&lt;/html&gt;</p>
        </div>
      </main>
    </div>
  );
};

export default Page;
