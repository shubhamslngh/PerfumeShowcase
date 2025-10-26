"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      className="bg-black text-white py-24 px-6 md:px-20 text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}>
      <motion.h2
        className="text-3xl md:text-5xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#f5deb3] to-[#fff]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}>
        The Essence of Ephyra
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed font-[var(--font-body)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}>
        Each bottle of Ephyra Perfumes captures timeless sophistication and
        emotional depth. Crafted from rare botanicals and precious resins, our
        fragrances embody elegance that lingers beyond moments — a signature
        aura designed for those who define their own essence.
      </motion.p>
    </motion.section>
  );
}
