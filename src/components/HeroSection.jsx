"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Responsive move distance (in px)
  // Responsive move distance (in px)
  const [moveDistance, setMoveDistance] = useState(480); // Default, will be overwritten

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      let bottleWidth;

      // This logic MUST match your Tailwind classes and breakpoints
      // Assumes default Tailwind breakpoints (sm: 640, md: 768, lg: 1024, xl: 1280)
      // Assumes 1rem = 16px

      if (vw < 640) {
        bottleWidth = 192; // 12rem (w-48)
      } else if (vw < 768) {
        bottleWidth = 288; // 18rem (sm:w-[18rem])
      } else if (vw < 1024) {
        bottleWidth = 384; // 24rem (md:w-[24rem])
      } else if (vw < 1280) {
        bottleWidth = 480; // 30rem (lg:w-[30rem])
      } else {
        bottleWidth = 544; // 34rem (xl:w-[34rem])
      }

      // The correct formula: (Viewport Center) - (Half Bottle Width)
      const distance = vw / 2 - bottleWidth / 2;
      setMoveDistance(distance);
    };

    // Run on initial load
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  /** ─────────────── Motion Values ─────────────── **/
  const leftX = useTransform(scrollYProgress, [0, 0.5], [0, moveDistance]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], [0, -moveDistance]);
  const leftScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const rightScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const perfumeOpacity = useTransform(scrollYProgress, [0.05, 0.45], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  const mistOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const mistY = useTransform(scrollYProgress, [0.55, 0.85], [100, -100]);
  const titleOpacity = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.45, 0.65], [50, 0]);

  return (
    <section ref={ref} className="relative h-[160vh] sm:h-[120vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Left Perfume */}
        <motion.img
          src="/images/dior.png"
          alt="Perfume Left"
          className="absolute left-0 w-48 sm:w-[18rem] md:w-[24rem] lg:w-[30rem] xl:w-[34rem] max-w-none"
          style={{ x: leftX, scale: leftScale, opacity: perfumeOpacity }}
          transition={{ ease: "easeInOut" }}
        />
        {/* Right Perfume */}
        <motion.img
          src="/images/dior.png"
          alt="Perfume Right"
          className="absolute right-0 w-48 sm:w-[18rem] md:w-[24rem] lg:w-[30rem] xl:w-[34rem] max-w-none"
          style={{ x: rightX, scale: rightScale, opacity: perfumeOpacity }}
          transition={{ ease: "easeInOut" }}
        />

        {/* Glow */}
        <motion.div
          className="absolute w-48 sm:w-[18rem] md:w-[24rem] lg:w-[28rem] h-48 sm:h-[18rem] md:h-[24rem] lg:h-[28rem] rounded-full bg-pink-500/20 blur-3xl mix-blend-screen"
          style={{ opacity: glowOpacity }}
        />

        {/* Mist */}
        <motion.div
          className="absolute w-[10rem] sm:w-[14rem] md:w-[20rem] lg:w-[24rem] h-[10rem] sm:h-[14rem] md:h-[20rem] lg:h-[24rem] bg-gradient-to-t from-pink-300/20 via-gray-200/10 to-transparent blur-3xl rounded-full mix-blend-screen"
          style={{ opacity: mistOpacity, y: mistY }}
          transition={{
            duration: 4,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Title */}
        <motion.h1
          className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] font-semibold tracking-wider text-white text-center z-10 drop-shadow-lg px-4 leading-tight"
          style={{ opacity: titleOpacity, y: titleY }}>
          post &nbsp;modern
        </motion.h1>
      </div>
    </section>
  );
}
