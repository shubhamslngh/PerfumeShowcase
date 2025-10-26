"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddtoCart from "./AddtoCart";
import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";

export default function ProductGrid() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  const [selected, setSelected] = useState(null);
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const expandedRef = useRef(null);

  // 🔹 Fake API Fetch Simulation
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setPerfumes([
        {
          id: 1,
          name: "Midnight Whisper",
          price: 4999,
          desc: "A mysterious blend of black amber and oud, whispering secrets of the night.",
          notes: "Amber • Oud • Musk",
          img: "/images/perfume1.jpg",
        },
        {
          id: 2,
          name: "Amber Veil",
          price: 5499,
          desc: "A warm embrace of amber and vanilla, soft as silk and everlasting.",
          notes: "Amber • Vanilla • Tonka",
          img: "/images/perfume2.jpg",
        },
        {
          id: 3,
          name: "Rose Noir",
          price: 6299,
          desc: "A dark rose laced with smoky cedar and patchouli — bold and sensual.",
          notes: "Rose • Cedar • Patchouli",
          img: "/images/perfume3.jpg",
        },
        {
          id: 4,
          name: "Ocean Luxe",
          price: 4799,
          desc: "A crisp marine fragrance with salt, driftwood, and citrus zest.",
          notes: "Sea Salt • Driftwood • Citrus",
          img: "/images/perfume4.jpg",
        },
        {
          id: 5,
          name: "Golden Ember",
          price: 5899,
          desc: "Rich saffron and smoky wood for a golden, confident aura.",
          notes: "Saffron • Smoke • Cedarwood",
          img: "/images/perfume5.jpg",
        },
        {
          id: 6,
          name: "Silk Blossom",
          price: 5299,
          desc: "Soft floral tones with a hint of musk — gentle and captivating.",
          notes: "Jasmine • Musk • Peony",
          img: "/images/perfume6.jpg",
        },
        {
          id: 7,
          name: "Noir Intense",
          price: 6899,
          desc: "Deep vetiver and tonka bean notes, mysterious and magnetic.",
          notes: "Vetiver • Tonka Bean • Leather",
          img: "/images/perfume7.jpg",
        },
        {
          id: 8,
          name: "Cedar Drift",
          price: 4599,
          desc: "Woody and fresh, an earthy fragrance that calms and grounds.",
          notes: "Cedar • Sandalwood • Moss",
          img: "/images/perfume8.jpg",
        },
      ]);
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // 🔹 Sync state with URL
  useEffect(() => {
    const id = Number(productId);
    if (id && perfumes.length) {
      const found = perfumes.find((p) => p.id === id);
      setSelected(found || null);
    } else {
      setSelected(null);
    }
  }, [productId, perfumes]);

  // 🔹 Smooth scroll to expanded product
  useEffect(() => {
    if (expandedRef.current && selected) {
      expandedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selected]);

  // 🔹 Close section + clean URL
  const handleClose = () => {
    setSelected(null);
    router.replace("/products", { scroll: false });
  };

  // 🔹 Handle click on product
  const handleSelect = (id) => {
    router.replace(`/products?id=${id}`, { scroll: false });
  };

  return (
    <motion.div
      layout
      className="max-w-7xl mx-auto flex flex-col gap-12 bg-gradient-to-tr from-[#410000] via-[#1a0000] to-black rounded-3xl py-10 px-4 md:px-10">
      {/* Expanded Quick-Look Section */}
      <AnimatePresence>
        {selected && (
          <motion.div
            ref={expandedRef}
            key="expanded"
            layout
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-[#ff4545]/40 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* 🔴 Cinematic Gradient */}
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,0,0,0.25),transparent_70%),radial-gradient(circle_at_80%_60%,rgba(255,80,80,0.3),transparent_70%)]"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[6px]" />
            {/* 🌫️ Glass + Divider Lines */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[6px]" />

            {/* Fine white grid lines */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut" }}>
              {/* Vertical lines */}
              <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent animate-pulse-slow" />
              <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent animate-pulse-slow delay-300" />
              {/* Horizontal lines */}
              <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse-slow delay-500" />
            </motion.div>
            {/* Perfume Image */}
            <motion.img
              src={selected.img}
              alt={selected.name}
              className="relative z-10 w-[12rem] sm:w-[18rem] md:w-[22rem] rounded-2xl shadow-[0_0_80px_rgba(255,60,60,0.3)]"
              layout
            />

            {/* Description */}
            <div className="relative z-10 text-center md:text-left max-w-2xl">
              <h2 className="text-4xl md:text-5xl text-white uppercase tracking-wide mb-4">
                {selected.name}
              </h2>
              <p className="text-gray-300 mb-3 leading-relaxed">
                {selected.desc}
              </p>
              <p className="text-sm text-red-300 italic mb-3">
                Notes: {selected.notes}
              </p>
              <p className="text-[#ffcb9a] text-lg font-semibold mb-6">
                ₹ {selected.price}
              </p>

              <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                <AddtoCart product={selected} />
                <button onClick={handleClose} className="p-1 text-[#ffcb9a]">
                  <X className="w-8 h-8" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Grid */}
      {loading ? (
        // 🔹 Skeleton Loader Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-pulse">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-80 rounded-3xl bg-linear-to-br from-red-100/30 via-gray-900/10 to-black border border-gray-700/40"
            />
          ))}
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perfumes.map((item, i) => (
            <motion.div
              layout
              key={i}
              onClick={() => handleSelect(item.id)}
              className={`relative cursor-pointer rounded-3xl overflow-hidden group border transition-all duration-500 ${
                selected?.id === item.id
                  ? "border-[#ff4545]/60"
                  : "border-gray-800"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.8 }}
              viewport={{ once: true }}>
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-red-950/40 to-transparent opacity-70 group-hover:opacity-90 transition-all" />
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <h3 className="text-2xl text-white uppercase tracking-wide">
                  {item.name}
                </h3>
                <p className="text-[#ffcb9a] mt-1">₹ {item.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
