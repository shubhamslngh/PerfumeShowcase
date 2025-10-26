"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import useCartStore from "@/store/cartStore";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ hydration-safe mount flag

  // Zustand cart
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Collection", href: "/products" },
    { label: "Craftsmanship", href: "/craftsmanship" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-700 ${
          scrolled
            ? "bg-black/70 border-b border-[#ffcb9a]/20 shadow-[0_0_15px_rgba(255,203,154,0.15)]"
            : "bg-transparent border-b border-transparent"
        }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10">
          {/* Left Nav */}
          <nav className="hidden md:flex gap-10">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm tracking-wider uppercase text-gray-300 hover:text-[#ffcb9a] relative group">
                {link.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#ffcb9a] group-hover:w-full transition-all duration-500"></span>
              </Link>
            ))}
          </nav>

          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="font-[var(--font-heading)] text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffcb9a] to-white tracking-widest uppercase select-none">
            <Link href="/">Post Modern</Link>
          </motion.div>

          {/* Right Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm tracking-wider uppercase text-gray-300 hover:text-[#ffcb9a] relative group">
                {link.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#ffcb9a] group-hover:w-full transition-all duration-500"></span>
              </Link>
            ))}

            {/* 🛍️ Cart Icon */}
            <Link
              href="/cart"
              className="relative text-[#ffcb9a] hover:text-white transition-all"
              aria-label="Cart">
              <ShoppingBag className="w-6 h-6" />
              {mounted &&
                totalItems > 0 && ( // ✅ Only render after mount
                  <motion.span
                    key={totalItems}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="absolute -top-2 -right-2 text-[10px] font-semibold bg-[#ffcb9a] text-black rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItems}
                  </motion.span>
                )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#ffcb9a] text-3xl"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu">
            ☰
          </button>
        </div>
      </motion.header>

      {/* Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-gradient-to-b from-[#1a0000] via-[#250000] to-black border-l border-[#ffcb9a]/20 z-50 shadow-[0_0_60px_rgba(255,203,154,0.15)] flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}>
              <div className="flex justify-end p-5">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-[#ffcb9a] text-3xl hover:text-white transition">
                  ✕
                </button>
              </div>

              <div className="flex flex-col mt-10 px-10 space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-2xl font-[var(--font-heading)] uppercase tracking-widest text-[#ffcb9a] hover:text-white transition-colors relative group">
                    {link.label}
                    <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-[#ffcb9a] group-hover:w-full transition-all duration-500"></span>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#ffcb9a]/20 to-transparent mt-3"></div>
                  </Link>
                ))}

                {/* 🛍 Cart for mobile */}
                {mounted && (
                  <Link
                    href="/cart"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 text-xl text-[#ffcb9a] hover:text-white">
                    <ShoppingBag className="w-5 h-5" />
                    Cart ({totalItems})
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
