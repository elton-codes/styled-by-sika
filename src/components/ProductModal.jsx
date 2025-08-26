import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, ShoppingCart, CreditCard, Wallet, Banknote } from "lucide-react";

export default function ProductModal({ open, product, onClose, onAdd, onWish }) {
  if (!open || !product) return null;

  const { title, desc, price, currency, image } = product;

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-black/40"
        onClick={onClose}
      />
      <motion.div
        key="panel"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-x-0 top-10 z-50 mx-auto w-[95vw] max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative h-80 md:h-full">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between">
              <h3 className="font-serif text-2xl">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-black/5"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-2 text-neutral-700">{desc}</p>
            <p className="mt-3 text-xl font-medium text-accent">
              {currency} {price.toLocaleString()}
            </p>

            {/* Quantity (demo) */}
            <div className="mt-5 flex items-center gap-3">
              <label className="text-sm text-neutral-600">Qty</label>
              <select className="rounded border border-neutral-300 px-3 py-2 text-sm">
                <option>1</option><option>2</option><option>3</option>
              </select>
            </div>

            {/* Primary CTAs */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                onClick={() => onAdd(product)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-5 py-3 text-sm"
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </button>
              <button
                onClick={() => onWish(product)}
                className="inline-flex items-center justify-center gap-2 rounded-full ring-1 ring-primary/15 text-primary px-5 py-3 text-sm"
              >
                <Heart className="h-4 w-4" />
                Wishlist
              </button>
            </div>

            {/* Payment options (demo only) */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-neutral-700">Pay Now</p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-lg border bg-gradient-to-r from-yellow-500 to-blue-300 border-neutral-300 px-3 py-3 text-sm">
                  <CreditCard className="h-4 w-4" />
                  Visa
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg border bg-blue-400 border-neutral-300 px-3 py-3 text-sm">
                  <Wallet className="h-4 w-4" />
                  PayPal
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg border bg-yellow-400 border-neutral-300 px-3 py-3 text-sm">
                  <Banknote className="h-4 w-4" />
                  Mobile Money
                </button>
              </div>
              <p className="mt-2 text-xs text-neutral-500">
                (Demo only — no real payments are processed.)
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
