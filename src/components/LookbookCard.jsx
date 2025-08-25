import React from "react";
import { motion } from "framer-motion";

export default function LookbookCard({ title, desc, price, image }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative w-full"
    >
      {/* Image wrapper */}
      <div className="relative w-full h-[28rem] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      {/* Info block below */}
      <div className="mt-3 text-center">
        <h3 className="font-serif text-lg">{title}</h3>
        <p className="mt-1 text-sm text-neutral-600">{desc}</p>
        <p className="mt-1 text-sm font-medium text-accent">{price}</p>
      </div>
    </motion.article>
  );
}
