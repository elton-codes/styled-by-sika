import React from "react";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="min-h-full bg-bg text-primary font-sans antialiased">
      <header className="w-full">
        <Nav />
      </header>

      <main className="mx-auto max-w-7xl px-6">{children}</main>

      <footer className="mt-16 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} Styled by Sika. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
