import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Trash2 } from "lucide-react";

export default function MiniCart({ open, items, currency = "GHS", onClose, onRemove, onCheckout }) {
  const subtotal = items.reduce((sum, p) => sum + (p.price || 0), 0);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="cart-backdrop"
            className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Panel */}
          <motion.aside
            key="cart-panel"
            className="fixed right-0 top-0 z-50 h-full w-[90vw] max-w-md bg-white shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mini cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <h3 className="font-serif text-xl">Your Cart</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-black/5"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-auto px-5 py-4 space-y-4">
              {items.length === 0 ? (
                <p className="text-sm text-neutral-600">Your cart is empty.</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-neutral-600 mt-0.5">
                        {currency} {item.price?.toLocaleString?.() ?? item.price}
                      </p>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="mt-2 inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-primary"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="border-t px-5 py-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600">Subtotal</span>
                <span className="font-medium">
                  {currency} {subtotal.toLocaleString()}
                </span>
              </div>
              <button
                onClick={onCheckout}
                disabled={items.length === 0}
                className="mt-3 w-full rounded-full bg-primary text-white py-3 text-sm disabled:opacity-50"
              >
                Checkout (Demo)
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
