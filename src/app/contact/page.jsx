"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 1.2, ease: "easeOut" },
    }),
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#1a0000] to-black text-white flex flex-col items-center justify-center px-6 md:px-12">
      {/* Moving background light */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,0,0,0.2),transparent_70%),radial-gradient(circle_at_80%_60%,rgba(255,80,80,0.25),transparent_70%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 w-full max-w-4xl py-24">
        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-[var(--font-heading)] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ffcb9a] to-white mb-6">
          Contact Us
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-center text-gray-300 max-w-2xl mx-auto mb-12 font-[var(--font-body)]">
          We’d love to hear from you. Whether you’re exploring our fragrances,
          seeking collaboration, or wish to share your experience — our doors
          are always open.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="relative bg-black/50 backdrop-blur-md border border-[#ffcb9a]/30 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(255,203,154,0.1)] space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-[#ffcb9a] text-sm mb-2 uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent border-b border-[#ffcb9a]/30 focus:border-[#ffcb9a] outline-none py-2 text-gray-200 placeholder-gray-500 transition-all"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#ffcb9a] text-sm mb-2 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="bg-transparent border-b border-[#ffcb9a]/30 focus:border-[#ffcb9a] outline-none py-2 text-gray-200 placeholder-gray-500 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[#ffcb9a] text-sm mb-2 uppercase tracking-wider">
              Subject
            </label>
            <input
              type="text"
              placeholder="How can we help?"
              className="bg-transparent border-b border-[#ffcb9a]/30 focus:border-[#ffcb9a] outline-none py-2 text-gray-200 placeholder-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#ffcb9a] text-sm mb-2 uppercase tracking-wider">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="bg-transparent border border-[#ffcb9a]/30 focus:border-[#ffcb9a] outline-none p-3 rounded-2xl text-gray-200 placeholder-gray-500 transition-all"
            />
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-4 px-10 py-3 border border-[#ffcb9a]/50 rounded-full text-[#ffcb9a] hover:bg-[#ffcb9a]/10 transition-all uppercase tracking-wide">
              Send Message
            </motion.button>
          </div>
        </motion.form>

        {/* Company Info Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-16 text-center space-y-2 text-gray-400 text-sm font-[var(--font-body)]">
          <p>
            <span className="text-[#ffcb9a] font-semibold">
              Indian Perfumes Pvt. Ltd.
            </span>
          </p>
          <p>
            Ancillarry Estate, N-14, Nadarganj Industrial Area Rd, Gindan Khera,
            Sector-13 Vikas Nagar, Amausi, Lucknow, Uttar Pradesh 226008
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@barunperfumes.com"
              className="text-[#ffcb9a] hover:underline">
              info@barunperfumes.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+919876543210"
              className="text-[#ffcb9a] hover:underline">
              +91 98765 43210
            </a>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
