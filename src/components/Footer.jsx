"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-gradient-to-t from-black via-[#1a0000] to-[#0a0000] text-gray-300 overflow-hidden border-t border-[#ffcb9a]/20">
      {/* Moving gradient lighting */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,0,0,0.15),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(255,80,80,0.2),transparent_70%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-[var(--font-heading)] text-[#ffcb9a] uppercase tracking-wider mb-4">
            Post Modern
          </h3>
          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            A luxury perfume brand by{" "}
            <span className="text-[#ffcb9a]">Indian Perfumes Pvt. Ltd.</span>,
            crafting timeless fragrances that embody elegance, passion, and art.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-[var(--font-heading)] text-[#ffcb9a] uppercase mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "Collection", href: "/products" },
              { label: "Craftsmanship", href: "/craftsmanship" },
              { label: "Stories", href: "/stories" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-[#ffcb9a] transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Details */}
        <div>
          <h4 className="text-lg font-[var(--font-heading)] text-[#ffcb9a] uppercase mb-4">
            Parent Company
          </h4>
          <p className="text-sm font-[var(--font-body)] leading-relaxed">
            <span className="font-semibold text-white">
              Indian Perfumes Pvt. Ltd.
            </span>
            <br />
            Ancillarry Estate, N-14, Nadarganj Industrial Area Rd, Gindan Khera,
            Sector-13 Vikas Nagar, Amausi, Lucknow, Uttar Pradesh 226008
          </p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="relative z-10 w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-[#ffcb9a]/40 to-transparent mb-8" />

      {/* Footer Bottom */}
      <div className="relative z-10 text-center pb-6 text-xs text-gray-500">
        © {new Date().getFullYear()} Post Modern Perfumes · A brand of Indian
        Perfumes Pvt. Ltd. · All rights reserved.
      </div>
    </footer>
  );
}
