import React from "react";
import { BRAND } from "../constants/brand.js";

const storyImg =
  "https://images.unsplash.com/photo-1551382195-c2f2b15ca123?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyYW5kJTIwc3RvcnklMjBhZnJpY2FuJTIwc2VhbXN0cmVzc3xlbnwwfHwwfHx8MA%3D%3D"; // placeholder

export default function BrandStory() {
  return (
    <section id="story" className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Image */}
        <div className="relative h-[22rem] md:h-full overflow-hidden">
          <img
            src={storyImg}
            alt="Styled by Sika atelier"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Copy */}
        <div className="flex flex-col justify-center px-2 md:px-6">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Our Story
          </p>
          <h3 className="mt-2 font-serif text-3xl md:text-4xl">
            {BRAND.NAME}
          </h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Styled by Sika is a celebration of Modern African Luxury — refined
            silhouettes, bespoke details, and contemporary craftsmanship. Each
            piece is thoughtfully designed for a timeless, editorial presence.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            From atelier to runway, our collections pair traditional sensibilities
            with a modern eye, inviting you into a world of intentional elegance.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#lookbook"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-white text-sm tracking-wide text-center"
            >
              Explore Lookbook
            </a>
            <a
              href="#newsletter"
              className="w-full sm:w-auto ml-3 px-6 py-3 rounded-full ring-1 ring-primary/15 text-sm tracking-wide text-primary text-center"
            >
              Join Newsletter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
