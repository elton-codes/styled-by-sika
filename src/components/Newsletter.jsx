import React, { useState } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [msg, setMsg] = useState("");

  const validateEmail = (value) => {
    // simple demo regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus("error");
      setMsg("Please enter a valid email address.");
      return;
    }
    // Demo only — no real request
    setStatus("success");
    setMsg("Thank you! You’re on the list.");
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-16">
      <div className="text-center">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent/15">
          <Mail className="h-5 w-5 text-accent" />
        </div>
        <h3 className="mt-3 font-serif text-3xl">Join Our Circle</h3>
        <p className="mt-2 text-neutral-700">
          Get early access to drops, private events, and editorials.
        </p>
      </div>

      <form onSubmit={onSubmit} className="mt-6 max-w-xl mx-auto px-6">
  <div className="flex flex-col sm:flex-row gap-3">
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-1 w-full min-w-0 rounded-full border border-neutral-300 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/15 bg-white"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      aria-label="Email"
    />
    <button
      type="submit"
      className="w-full sm:w-auto rounded-full bg-primary text-white px-6 py-3 text-sm"
    >
      Subscribe
    </button>
  </div>
</form>

      {status && (
        <p
          className={`mt-3 text-center text-sm ${
            status === "success" ? "text-emerald-600" : "text-red-600"
          }`}
        >
          {msg}
        </p>
      )}
    </section>
  );
}
