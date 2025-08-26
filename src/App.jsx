import React, { useState } from "react";
import Layout from "./components/Layout.jsx";
import Hero from "./components/Hero.jsx";
import Lookbook from "./components/Lookbook.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import ProductModal from "./components/ProductModal.jsx";
import MiniCart from "./components/MiniCart.jsx";
import { PRODUCTS } from "./constants/products.js";
import BrandStory from "./components/BrandStory.jsx";
import Newsletter from "./components/Newsletter.jsx";
import LookbookMasonry from "./components/LookbookMasonry.jsx";
import LookbookCarousel from "./components/LookbookCarousel.jsx";


export default function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [openProduct, setOpenProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart handlers
  const handleQuickAdd = (product) => setCart((prev) => [...prev, product]);
  const handleRemoveFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  // Wishlist handlers (badge only for now)
  const handleWish = (product) =>
    setWishlist((prev) => (prev.find((p) => p.id === product.id) ? prev : [...prev, product]));
  const handleOpenWishlist = () => alert("Wishlist panel coming soon (demo).");

  // Product modal
  const handleOpen = (product) => setOpenProduct(product);
  const handleClose = () => setOpenProduct(null);

  const cartCount = cart.length;
  const wishCount = wishlist.length;

  return (
    <>
      {/* Pass counts + handlers to Layout via Nav */}
      <Layout
        navProps={{
    cartCount,
    wishCount,
    onCartOpen: handleOpenCart,
    onWishOpen: handleOpenWishlist,
  }}
      >
        {/* Inject Nav props by cloning Layout? Easier: give Layout nothing and update Nav to accept props */}
        {/* We’ll pass via context in a bigger app; for demo keep it simple */}
        {/* Replace Layout header Nav usage: <Nav ...props/> – open Layout.jsx and forward props if you want.
            Quick approach: import Nav here and render it before others; but we’ll keep your current Layout and
            instead slightly modify Layout to accept children only, and Nav already lives inside it.
            So, open Layout.jsx and change <Nav /> to:
              <Nav cartCount={cartCount} wishCount={wishCount} onCartOpen={handleOpenCart} onWishOpen={handleOpenWishlist} />
        */}
        <Hero />
        {/* <Lookbook /> */}
        {/* <LookbookMasonry /> */}
        <LookbookCarousel />
        <ProductGrid
          products={PRODUCTS}
          onQuickAdd={handleQuickAdd}
          onWish={handleWish}
          onOpen={handleOpen}
        />

        <ProductModal
          open={!!openProduct}
          product={openProduct}
          onClose={handleClose}
          onAdd={handleQuickAdd}
          onWish={handleWish}
        />

        <BrandStory />
        <Newsletter />
      </Layout>

      {/* Mini Cart lives outside main flow so it overlays everything */}
      <MiniCart
        open={isCartOpen}
        items={cart}
        currency="GHS"
        onClose={handleCloseCart}
        onRemove={handleRemoveFromCart}
        onCheckout={() => alert("Demo checkout — integrate provider later.")}
      />
    </>
  );
}
