// src/components/Nav.jsx
import React from "react";
import { Instagram, Menu, ShoppingBag, Heart } from "lucide-react";
import { BRAND } from "../constants/brand";

export default function Nav({
  cartCount = 0,
  wishCount = 0,
  onCartOpen,
  onWishOpen,
}) {
  return (
    <nav className="mx-auto max-w-7xl px-6 py-4 md:py-2 lg:py-2">
      {/* Top row: controls (keeps brand perfectly centered below on all screens) */}
      <div className="flex items-center justify-between">
        {/* Left: menu (placeholder) */}
        <button
          className="p-2 rounded focus-visible:outline-none"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-primary" />
        </button>

        {/* Right: socials + wishlist + cart */}
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="https://www.instagram.com/styledbysika/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded focus-visible:outline-none"
            title="Instagram"
          >
            <Instagram className="h-5 w-5 text-primary" />
          </a>

          {/* Wishlist */}
          <button
            onClick={onWishOpen}
            className="relative p-2 rounded focus-visible:outline-none"
            aria-label="Open wishlist"
            title="Wishlist"
          >
            <Heart className="h-5 w-5 text-primary" />
            {wishCount > 0 && (
              <span className="absolute -top-1 -right-1 rounded-full bg-accent text-white text-[10px] leading-none px-1.5 py-1">
                {wishCount}
              </span>
            )}
          </button>

          {/* Cart */}
          <button
            onClick={onCartOpen}
            className="relative p-2 rounded focus-visible:outline-none"
            aria-label="Open cart"
            title="Cart"
          >
            <ShoppingBag className="h-5 w-5 text-primary" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 rounded-full bg-primary text-white text-[10px] leading-none px-1.5 py-1">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Brand row: perfectly centered on all breakpoints */}
      <div className="mt-2 md:-mt-6 lg:-mt-6 flex justify-center">
        <a
          href="/"
          className="flex flex-col items-center"
          aria-label="Styled by Sika — Home"
        >
          {/* Wordmark (bold, elegant) */}
          <span className="font-serif font-semibold tracking-[0.25em] uppercase text-lg md:text-xl text-primary text-center">
            Styled by Sika
          </span>

          {/* Logo (slightly larger for presence) */}
          <img
            src={BRAND.LOGO}
            alt="Styled by Sika logo"
            className="mt-1 h-12 w-auto md:h-14 object-contain rounded-full"
            loading="eager"
            decoding="async"
          />
        </a>
      </div>

      {/* Divider */}
      <div className="mt-3 h-px bg-primary/10" />
    </nav>
  );
}
