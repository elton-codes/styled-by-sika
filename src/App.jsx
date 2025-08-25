import React from "react";
import Layout from "./components/Layout.jsx";
import { BRAND } from "./constants/brand.js";
import Hero from "./components/Hero.jsx";
import LookbookCard from "./components/LookbookCard.jsx";
import Lookbook from "./components/Lookbook.jsx";

function App() {
  return (
    <Layout>
      <Hero />
      <Lookbook />
      {/* Keep this simple section for now as a visual spacer/check */}
      <section className="py-16 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
          {BRAND.TAGLINE}
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-serif">Editorial Preview</h2>
        <p className="mt-3 max-w-2xl mx-auto text-neutral-700">
          Next we’ll add a Christie Brown–inspired lookbook grid with hover states.
        </p>
      </section>
    </Layout>
  );
}

export default App;
