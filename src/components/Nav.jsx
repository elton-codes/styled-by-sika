import { Facebook, Instagram, Menu, Youtube } from "lucide-react";

export default function Nav() {
  return (
    <nav className="mx-auto max-w-7xl px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: minimal menu icon (future mobile nav) */}
        <button
          className="p-2 rounded hover:bg-accent/20 focus-visible:outline-none"
          aria-label="Menu"
        >
          <Menu className="h-5 w-5 text-primary"/>
        </button>
         {/* Center: brand wordmark */}
         <a href="/" className="text-sm md:text-base tracking-[0.25em] uppercase text-primary">
           Styled by Sika
         </a>
         {/* Right: socials */}
         <div className="flex items-center gap-3">
          <a href="https://www.instagram.com/styledbysika/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded hover:bg-accent/20 focus:outline-none "
          >
            <Instagram className="h-5 w-5 text-primary"/>
          </a>

          <a href="https://www.instagram.com/styledbysika/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded hover:bg-accent/20 focus:outline-none"
          >
            <Facebook className="h-5 w-5 text-primary"/>
          </a>

         </div>
      </div>
    </nav>
  )
}