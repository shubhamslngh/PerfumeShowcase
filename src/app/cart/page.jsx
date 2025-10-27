"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import useCartStore from "@/store/cartStore";

export default function CartPage() {
  const { cart, updateQty, removeFromCart, getTotalPrice } = useCartStore();
  const subtotal = getTotalPrice();

  return (
    // ADJUST: Reduced top/bottom padding on mobile (py-16)
    <section className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white px-4 sm:px-8 py-16 sm:py-20">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        // ADJUST: Smaller text on mobile (text-3xl), smaller margin-bottom (mb-10)
        className="text-3xl sm:text-4xl lg:text-5xl text-center font-(--font-heading) text-transparent bg-clip-text bg-gradient-to-r from-[#f5deb3] to-white mb-10 sm:mb-14">
        <ShoppingCart
          // ADJUST: Smaller icon on mobile
          className="inline-block w-8 h-8 sm:w-10 sm:h-10 text-[#f5deb3] mr-2 sm:mr-3"
        />
        Your Cart
      </motion.h1>

      {/* Cart Content */}
      {cart.length === 0 ? (
        <div className="text-center text-gray-400 text-lg">
          Your cart is empty.
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                // ADJUST: Use `sm:items-center` so mobile stacks full-width.
                // ADJUST: Reduced padding on mobile (p-4).
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#111]/70 border border-[#f5deb3]/10 rounded-2xl p-4 sm:p-6 shadow-[0_0_25px_rgba(245,222,179,0.08)]">
                {/* ADJUST: Reduced gap on mobile (gap-4) */}
                <div className="flex items-center gap-4">
                  <Image
                    src={item.img}
                    alt={item.name}
                    // ADJUST: Use largest size for width/height props
                    width={112}
                    height={112}
                    // ADJUST: Smaller image on mobile (w/h-[5rem]) and added h- to ensure square
                    className="rounded-xl w-[5rem] h-[5rem] sm:w-[7rem] sm:h-[7rem] object-cover flex-shrink-0"
                  />
                  <div>
                    <h2 className="text-base sm:text-lg font-semibold text-[#f5deb3]">
                      {item.name}
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">
                      ₹{item.price.toLocaleString()}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        // ADJUST: Increased padding for better tap target
                        className="p-1.5 border border-[#f5deb3]/40 rounded-full hover:bg-[#f5deb3]/10 transition-colors">
                        {/* ADJUST: Slightly smaller icon to fit new padding */}
                        <Minus className="w-3.5 h-3.5 text-[#f5deb3]" />
                      </button>
                      <span className="text-[#f5deb3] font-semibold text-base w-8 text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        // ADJUST: Increased padding for better tap target
                        className="p-1.5 border border-[#f5deb3]/40 rounded-full hover:bg-[#f5deb3]/10 transition-colors">
                        <Plus className="w-3.5 h-3.5 text-[#f5deb3]" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remove + Total */}
                <div className="flex flex-col items-end mt-4 sm:mt-0">
                  <p className="text-lg text-[#f5deb3] font-semibold">
                    ₹{(item.price * item.qty).toLocaleString()}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center gap-1 mt-2 text-gray-400 hover:text-red-400 text-sm transition-colors">
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            // ADJUST: Simplified padding to just p-6
            className="bg-[#111]/70 border border-[#f5deb3]/10 rounded-2xl p-6 shadow-[0_0_25px_rgba(245,222,179,0.08)] h-fit">
            <h3 className="text-2xl font-semibold mb-6 text-[#f5deb3]">
              Order Summary
            </h3>
            <div className="flex justify-between mb-2 text-gray-300">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-300">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t border-[#f5deb3]/20 my-4"></div>
            <div className="flex justify-between text-lg font-semibold text-[#f5deb3]">
              <span>Total</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              // ADJUST: Added explicit text-base
              className="w-full mt-8 py-3 flex items-center justify-center gap-2 rounded-full bg-[#f5deb3] text-black text-base font-semibold shadow-[0_0_30px_rgba(245,222,179,0.4)] hover:shadow-[0_0_45px_rgba(245,222,179,0.5)] transition-all">
              Proceed to Checkout
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
