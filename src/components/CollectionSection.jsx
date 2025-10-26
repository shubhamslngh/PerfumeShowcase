"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    name: "Midnight Whisper",
    desc: "A mysterious blend of black amber and oud, whispering secrets of the night.",
    price: "4,999",
    img: "/images/perfume8.jpg",
  },
  {
    name: "Amber Veil",
    desc: "A warm embrace of amber and vanilla, soft as silk and everlasting.",
    price: "5,499",
    img: "/images/perfume2.jpg",
  },
  {
    name: "Rose Noir",
    desc: "A dark rose laced with smoky cedar and patchouli — bold and sensual.",
    price: "6,299",
    img: "/images/perfume3.jpg",
  },
  {
    name: "Oud Noir",
    desc: "An intense woody fragrance of smoky oud and rich amber, elegant and bold.",
    price: "6,799",
    img: "/images/perfume6.jpg",
  },
  {
    name: "Ocean Luxe",
    desc: "A crisp marine fragrance with salt, driftwood, and citrus zest.",
    price: "4,799",
    img: "/images/perfume4.jpg",
  },
];

export default function ProductShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const next = () => setIndex((prev) => (prev + 1) % products.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + products.length) % products.length);

  const handleDragEnd = (e, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -100 || velocity < -500) next();
    else if (offset > 100 || velocity > 500) prev();
  };

  // Auto-rotate
  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(next, 4000);
    }
    return () => clearInterval(timerRef.current);
  }, [paused]);

  // Pause on touch or mouse interaction
  const handlePause = () => {
    setPaused(true);
    clearInterval(timerRef.current);
  };
  const handleResume = () => {
    setPaused(false);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-black via-[#1a0000] to-black text-white"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onTouchStart={handlePause}
      onTouchEnd={handleResume}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-(--font-heading) tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#f5deb3] to-white mb-10 text-center px-4">
        Our Collection
      </h1>

      {/* Product Display Container */}
      <motion.div
        className="relative w-full flex items-center justify-center h-[340px] sm:h-[420px]"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}>
        {products.map((product, i) => {
          const isActive = i === index;
          const isLeft = i === (index - 1 + products.length) % products.length;
          const isRight = i === (index + 1) % products.length;

          let x = "0rem";
          let scale = 1;
          let opacity = 0.7;
          let zIndex = 0;

          if (isLeft) {
            x = "-14rem";
            scale = 0.85;
          } else if (isRight) {
            x = "14rem";
            scale = 0.85;
          } else if (isActive) {
            zIndex = 10;
            opacity = 1;
            scale = 1.05;
          } else {
            opacity = 0;
          }

          return (
            <motion.div
              key={i}
              className="absolute flex flex-col items-center select-none"
              animate={{ x, scale, opacity, zIndex }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}>
              {/* Glow behind active bottle */}
              {isActive && (
                <motion.div
                  layoutId="glow"
                  className="absolute w-[18rem] sm:w-[22rem] h-[18rem] sm:h-[22rem] rounded-full bg-[#f5deb3]/10 blur-3xl -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              )}

              {/* Perfume image */}
              <motion.img
                src={product.img}
                alt={product.name}
                className="w-auto h-96 sm:w-[16rem] md:w-[20rem] rounded-2xl shadow-[0_0_40px_rgba(245,222,179,0.2)]"
                draggable={false}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="mt-10 text-center max-w-2xl px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-(--font-heading) mb-2 text-[#f5deb3]">
            {products[index].name}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg font-(--font-body) leading-relaxed">
            {products[index].desc}
          </p>
          <p className="mt-4 text-[#f5deb3] font-semibold">
            ₹{products[index].price}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Swipe / Auto Info */}
      <motion.div
        className="mt-6 text-gray-500 text-sm italic"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}>
        {paused ? "Swipe to explore" : "Auto playing... (swipe to pause)"}
      </motion.div>
    </section>
  );
}
