"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCart } from "@/lib/cart";

export default function Navbar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const cart = getCart();
      setCount(cart.reduce((sum, item) => sum + item.quantity, 0));
    };

    updateCount();

    window.addEventListener("cart-updated", updateCount);

    return () => {
      window.removeEventListener("cart-updated", updateCount);
    };
  }, []);

  return (
   <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-base md:text-xl font-light uppercase tracking-[0.45em] transition-opacity duration-300 hover:opacity-70"
          >
            SACRILEGE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.32em]">

            <a
              href="#drop001"
              className="text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              Shop
            </a>

            <a
              href="#editorial"
              className="text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              Campaign
            </a>

          </nav>

          {/* Cart */}
          <button
            onClick={() => window.dispatchEvent(new Event("open-cart"))}
            className="px-2 uppercase tracking-[0.28em] text-xs font-medium text-white/90 transition-all duration-300 hover:text-white"
          >
            BAG {count > 0 ? `(${count})` : ""}
          </button>

        </div>
  );
}