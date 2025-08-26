import React from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";

export default function ProductCard({ product, onQuickAdd, onWish, onOpen }) {
  const { title, price, currency, image } = product;
  return(
    <article className="group relative w-full">
      {/* Image */}
      <div className="relative w-full h-[24rem] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

        {/* Quick actions (top-right) */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onQuickAdd(product)}
            className="p-2 rounded-full bg-white/90 text-primary hover:bg-white shadow-sm"
            title="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
          <button
            onClick={() => onWish(product)}
            className="p-2 rounded-full bg-white/90 text-primary hover:bg-white shadow-sm"
            title="Add to wishlist"
          >
            <Heart className="h-4 w-4" />
          </button>
          <button
            onClick={() => onOpen(product)}
            className="p-2 rounded-full bg-white/90 text-primary hover:bg-white shadow-sm"
            title="View details"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Info below */}
      <div className="mt-3 text-center">
        <h3 className="font-serif text-lg">{title}</h3>
        <p className="mt-1 text-sm font-medium text-accent">
          {currency} {price.toLocaleString()}
        </p>
      </div>
    </article>
  );

}