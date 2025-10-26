"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Info, Star } from "lucide-react";
import useCartStore from "@/store/cartStore";

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const totalItems = useCartStore((state) => state.getTotalItems());
   
    return (
      
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="relative bg-[#111]/70 border border-[#f5deb3]/20 rounded-2xl p-5 backdrop-blur-md shadow-[0_0_25px_rgba(245,222,179,0.08)] hover:shadow-[0_0_45px_rgba(245,222,179,0.15)] transition-all">
      {/* Perfume Image */}
      <div className="relative">
        <Image
          src={product.img}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-2xl object-cover w-full h-64 sm:h-72"
        />

        {/* Decorative glow star */}
        <div className="absolute top-3 right-3 bg-[#f5deb3]/10 rounded-full p-2">
          <Star className="w-5 h-5 text-[#f5deb3]" />
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-[#f5deb3] tracking-wide">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mt-1 line-clamp-2">
          {product.desc}
        </p>
        <p className="mt-3 text-[#f5deb3] font-semibold">
          ₹{product.price.toLocaleString()}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-5">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart(product)}
          className="flex items-center justify-center gap-2 w-full py-2 rounded-full border border-[#f5deb3]/50 text-[#f5deb3] hover:bg-[#f5deb3]/10 transition-all">
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#f5deb3]/50 text-[#f5deb3] hover:bg-[#f5deb3]/10 transition-all">
          <Info className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Cart Count */}
      <p className="mt-3 text-xs text-gray-400 text-center">
        Total items in cart:{" "}
        <span className="text-[#f5deb3] font-semibold">{totalItems()}</span>
      </p>
    </motion.div>
  );
}
