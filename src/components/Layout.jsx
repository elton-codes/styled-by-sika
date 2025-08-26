import React from "react";
import Nav from "./Nav";

export default function Layout({ children, navProps = {} }) {
  return (
    <div className="min-h-full bg-bg text-primary font-sans antialiased">
      <header className="w-full">
        <Nav {...navProps} />
      </header>

      <main className="mx-auto max-w-7xl px-6">{children}</main>

      <footer className="mt-16 border-t border-neutral-200">
  <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
    <div>
      <p className="font-serif text-lg">Styled by Sika</p>
      <p className="mt-2 text-neutral-600">
        Modern African Luxury — refined silhouettes and editorial elegance.
      </p>
    </div>

    <div className="flex gap-6 md:justify-center">
      <a href="#lookbook" className="text-neutral-700 hover:text-primary">Lookbook</a>
      <a href="#story" className="text-neutral-700 hover:text-primary">Our Story</a>
      <a href="#newsletter" className="text-neutral-700 hover:text-primary">Newsletter</a>
    </div>

    <div className="md:text-right text-neutral-500">
      © {new Date().getFullYear()} Styled by Sika. All rights reserved.
    </div>
  </div>
</footer>

    </div>
  );
}
