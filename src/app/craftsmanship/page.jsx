"use client";
import { motion } from "framer-motion";

export default function CraftsmanshipPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 1.2, ease: "easeOut" },
    }),
  };

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-black via-[#1a0000] to-black text-white">
      {/* Moving Red Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,0,0,0.2),transparent_70%),radial-gradient(circle_at_80%_60%,rgba(255,80,80,0.25),transparent_70%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Section 1 – Intro */}
      <section className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-[var(--font-heading)] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#ffcb9a] to-white">
          The Art of Craftsmanship
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-8 max-w-3xl text-gray-300 font-[var(--font-body)] leading-relaxed text-lg">
          Every bottle of Barun Perfume begins as a vision — a balance of scent,
          light, and form. Each note, hand-blended by artisans, tells a story of
          timeless elegance.
        </motion.p>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#ffcb9a]/40 to-transparent mx-auto w-3/4" />

      {/* Section 2 – The Glass Makers */}
      <section className="relative z-10 grid md:grid-cols-2 items-center py-32 px-6 md:px-20 gap-10">
        <motion.div
          className="order-2 md:order-1"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}>
          <h2 className="text-3xl md:text-5xl font-[var(--font-heading)] text-[#ffcb9a] mb-6">
            The Glass Makers
          </h2>
          <p className="text-gray-300 font-[var(--font-body)] leading-relaxed text-lg">
            Each Barun bottle is born from molten glass, shaped by skilled
            artisans. The smoky gradients and elegant cubic edges symbolize
            harmony — where transparency meets mystery.
          </p>
        </motion.div>
        <motion.div
          className="order-1 md:order-2 relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}>
          <img
            src="/images/crafts.jpg"
            alt="Glass Artisan"
            className="rounded-3xl shadow-[0_0_60px_rgba(255,80,80,0.3)] w-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl" />
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#ffcb9a]/30 to-transparent mx-auto w-3/4" />

      {/* Section 3 – Ingredients */}
      <section className="relative z-10 grid md:grid-cols-2 items-center py-32 px-6 md:px-20 gap-10">
        <motion.img
          src="/images/ingredients.jpg"
          alt="Ingredients"
          className="rounded-3xl shadow-[0_0_60px_rgba(255,80,80,0.3)] w-full object-cover"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}>
          <h2 className="text-3xl md:text-5xl font-[var(--font-heading)] text-[#ffcb9a] mb-6">
            The Essence of Nature
          </h2>
          <p className="text-gray-300 font-[var(--font-body)] leading-relaxed text-lg">
            We source rare botanicals from around the world — amber from
            Madagascar, rose from Bulgaria, and oud from India. Each drop
            distills purity, patience, and perfection.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#ffcb9a]/30 to-transparent mx-auto w-3/4" />

      {/* Section 4 – Final Touch */}
      <section className="relative z-10 flex flex-col items-center text-center py-40 px-6">
        <motion.img
          src="/images/perfume3.jpg"
          alt="Perfume Bottle"
          className="w-[18rem] sm:w-[24rem] md:w-[28rem] rounded-3xl mb-10 shadow-[0_0_80px_rgba(255,60,60,0.4)]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="text-4xl md:text-6xl font-[var(--font-heading)] tracking-wide mb-6">
          A Symphony in Every Bottle
        </motion.h3>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="max-w-3xl text-gray-300 font-[var(--font-body)] text-lg leading-relaxed">
          Each Barun Perfume embodies craftsmanship beyond scent — it’s an art
          piece meant to be seen, held, and remembered. A journey through smoke,
          glass, and emotion.
        </motion.p>
      </section>
    </main>
  );
}
