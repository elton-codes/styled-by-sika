// src/components/ProductCard.jsx
import React from "react";
import { Heart, ShoppingCart } from "lucide-react";

export default function ProductCard({ product, onQuickAdd, onWish, onOpen }) {
  const { title, price, currency, image } = product;

  const openDetails = () => onOpen?.(product);
  const stop = (e) => e.stopPropagation();

  return (
    <article
      className="group relative w-full cursor-pointer"
      onClick={openDetails}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openDetails()}
      aria-label={`${title} — view details`}
    >
      {/* Image */}
      <div className="relative w-full h-[24rem] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Bottom control bar (always visible; hover increases contrast) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3">
          <div className="pointer-events-auto flex items-center justify-center gap-2">
            {/* subtle gradient under icons for readability */}
            <div className="absolute inset-x-0 -top-12 bottom-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

            <button
              onClick={(e) => {
                stop(e);
                onWish?.(product);
              }}
              className="relative z-10 inline-flex items-center justify-center h-8 w-8 rounded-md bg-black/80 text-primary hover:bg-black/60 shadow-sm"
              aria-label={`Add ${title} to wishlist`}
              title="Wishlist"
            >
              <Heart className="h-4 w-4 text-white" />
            </button>

            <button
              onClick={(e) => {
                stop(e);
                onQuickAdd?.(product);
              }}
              className="relative z-10 inline-flex items-center justify-center h-8 w-8 rounded-md bg-black/80 text-primary hover:bg-black/60 shadow-sm"
              aria-label={`Add ${title} to cart`}
              title="Add to cart"
            >
              <ShoppingCart className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Info below image */}
      <div className="mt-3 text-center px-1">
        <h3 className="font-serif text-lg">{title}</h3>
        <p className="mt-1 text-sm font-medium text-accent">
          {currency} {Number(price).toLocaleString()}
        </p>
      </div>
    </article>
  );
}
