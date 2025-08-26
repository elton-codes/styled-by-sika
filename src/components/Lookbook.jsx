import React from "react";
import LookbookCard from "./LookbookCard.jsx";
import { LOOKBOOK_ITEMS } from "../constants/content.js";

export default function Lookbook() {
  return (
    <section id="lookbook" className="py-16">
      <header className="text-center mb-10">
        <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
          Lookbook
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-serif">Editorial Grid</h2>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {LOOKBOOK_ITEMS.slice(0, 6).map((item) => (
          <LookbookCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
