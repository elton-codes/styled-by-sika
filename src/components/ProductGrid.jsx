import React from "react";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ products, onQuickAdd, onWish, onOpen }) {
  return (
    <section className="py-16">
      <header className="text-center mb-10">
        <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
          SHOP 
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-serif">Products</h2>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0, 8).map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onQuickAdd={onQuickAdd}
            onWish={onWish}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  );
}
