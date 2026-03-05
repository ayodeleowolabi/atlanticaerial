"use client";

import { useMemo, useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mkoqweyy";

const SERVICE_OPTIONS = [
  "Construction & Development Documentation",
  "Architecture & Urban Design",
  "Infrastructure Inspection",
  "Tourism & Destination Promotion",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    otherService: "",
    message: "",
    // honeypot (bots fill it; humans won't see it)
    company: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const isOther = form.service === "Other";
  const subject = useMemo(() => {
    if (isOther) return form.otherService.trim() || "Other";
    return form.service || "Project inquiry";
  }, [form.otherService, form.service, isOther]);

  const canSend =
    form.name.trim() &&
    form.email.trim() &&
    form.message.trim() &&
    (form.service && (!isOther || form.otherService.trim()));

  const update = (key) => (e) =>
    setForm((p) => ({
      ...p,
      [key]: e.target.value,
    }));

  const selectService = (value) =>
    setForm((p) => ({
      ...p,
      service: value,
    }));

  const reset = () =>
    setForm({
      name: "",
      email: "",
      service: "",
      otherService: "",
      message: "",
      company: "",
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // honeypot check
    if (form.company.trim()) return;

    if (!canSend) {
      setStatus("error");
      setErrorMsg("Please fill in name, email, service (or other), and message.");
      return;
    }

    setStatus("sending");

    try {
      const payload = new FormData();
      payload.append("name", form.name);
      payload.append("email", form.email);
      payload.append("subject", subject);
      payload.append("service", isOther ? `Other: ${form.otherService}` : form.service);
      payload.append("message", form.message);

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const msg =
          data?.errors?.[0]?.message ||
          "Something went wrong sending your message. Please try again.";
        setStatus("error");
        setErrorMsg(msg);
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-black text-white px-10 py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4">
            Contact
          </p>
          <h2
            className="font-semibold tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)" }}
          >
            Tell us about the work.
          </h2>
          <p className="mt-5 text-white/65 max-w-2xl mx-auto leading-relaxed">
            Choose a service (or write your own), then share location, timeline, and deliverables.
          </p>
        </div>

        <form onSubmit={onSubmit} className="max-w-3xl mx-auto">
          {/* honeypot (hidden) */}
          <div className="hidden" aria-hidden="true">
            <label>
              Company
              <input value={form.company} onChange={update("company")} />
            </label>
          </div>

          {/* Name / Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div>
              <label className="block text-white/50 text-xs tracking-[0.22em] uppercase mb-3">
                Name
              </label>
              <input
                value={form.name}
                onChange={update("name")}
                placeholder="Your name"
                className="w-full bg-transparent border-b border-white/15 py-3 outline-none text-white placeholder:text-white/25 focus:border-yellow-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-white/50 text-xs tracking-[0.22em] uppercase mb-3">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@email.com"
                className="w-full bg-transparent border-b border-white/15 py-3 outline-none text-white placeholder:text-white/25 focus:border-yellow-400 transition-colors"
              />
            </div>
          </div>

          {/* Service choices as 2x2 cards */}
          <div className="mb-10">
            <div className="flex items-end justify-between mb-5">
              <span className="block text-white/50 text-xs tracking-[0.22em] uppercase">
                Project Type
              </span>
              <span className="text-white/35 text-xs tracking-[0.18em] uppercase">
                Click to select
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SERVICE_OPTIONS.map((s) => {
                const selected = form.service === s;
                return (
                  <button
                    type="button"
                    key={s}
                    onClick={() => selectService(s)}
                    className={`text-left rounded-xl border p-7 transition-all duration-300 ${
                      selected
                        ? "border-yellow-400 bg-yellow-400/10 -translate-y-1 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                        : "border-white/12 bg-white/[0.02] hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                    }`}
                  >
                    <div className="text-white font-medium tracking-tight text-lg leading-snug">
                      {s}
                    </div>
                    <div className="mt-2 text-white/45 text-xs tracking-[0.2em] uppercase">
                      {selected ? "Selected" : "Select"}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Other */}
            <div className="mt-6">
              <button
                type="button"
                onClick={() => selectService("Other")}
                className={`w-full text-left rounded-xl border p-6 transition-all duration-300 ${
                  form.service === "Other"
                    ? "border-yellow-400 bg-yellow-400/10"
                    : "border-white/12 bg-white/[0.02] hover:border-white/25"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-white font-medium tracking-tight">
                    Other (type below)
                  </div>
                  <div className="text-white/45 text-xs tracking-[0.2em] uppercase">
                    {form.service === "Other" ? "Selected" : "Select"}
                  </div>
                </div>

                {form.service === "Other" && (
                  <div className="mt-4">
                    <input
                      value={form.otherService}
                      onChange={update("otherService")}
                      placeholder="Type your project type…"
                      className="w-full bg-transparent border-b border-white/15 py-3 outline-none text-white placeholder:text-white/25 focus:border-yellow-400 transition-colors"
                    />
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Message */}
          <div className="mb-10">
            <label className="block text-white/50 text-xs tracking-[0.22em] uppercase mb-3">
              Message
            </label>
            <textarea
              value={form.message}
              onChange={update("message")}
              rows={6}
              placeholder="Location, timeline, deliverables, any access constraints, and what success looks like…"
              className="w-full bg-transparent border border-white/12 rounded-xl p-5 outline-none text-white placeholder:text-white/25 focus:border-yellow-400 transition-colors resize-none"
            />
          </div>

          {/* Status */}
          {status === "success" && (
            <div className="mb-6 text-green-300 text-sm">
              Message sent. We’ll be in touch shortly.
            </div>
          )}
          {status === "error" && (
            <div className="mb-6 text-red-300 text-sm">
              {errorMsg || "Something went wrong. Please try again."}
            </div>
          )}

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!canSend || status === "sending"}
              className={`px-6 py-3 rounded-lg text-xs tracking-[0.22em] uppercase font-semibold transition ${
                !canSend || status === "sending"
                  ? "bg-white/10 text-white/35 cursor-not-allowed"
                  : "bg-yellow-400 text-black hover:bg-white"
              }`}
            >
              {status === "sending" ? "Sending…" : "Send →"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}