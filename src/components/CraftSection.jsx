"use client";
import { motion } from "framer-motion";

export default function CraftSection() {
  return (
    <motion.section
      className="relative bg-black text-white py-32 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}>
      <motion.div
        className="absolute inset-0 bg-[url('/images/smoke-bg.jpg')] bg-contain bg-center opacity-20"
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#f5deb3] to-[#fff]">
          Crafted in Silence, Worn in Confidence
        </h2>
        <p className="max-w-2xl mt-6 text-gray-300 text-lg leading-relaxed font-[var(--font-body)]">
          Every scent is a symphony of art and alchemy, distilled in small
          batches to ensure perfection. Experience the harmony between luxury
          and soul in every drop of Barun Perfumes.
        </p>
        <motion.button
          className="mt-10 px-10 py-4 bg-[#f5deb3]/10 border border-[#f5deb3]/30 text-[#f5deb3] rounded-full font-semibold tracking-wide hover:bg-[#f5deb3]/20 transition-all"
          onClick={() => { window.location.href = "products"; }}
          whileHover={{ scale: 1.05 }}>
          Explore More
        </motion.button>
      </div>
    </motion.section>
  );
}
