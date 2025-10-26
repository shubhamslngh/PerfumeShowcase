"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import useCartStore from "@/store/cartStore";

export default function CartPage() {
  const { cart, updateQty, removeFromCart, getTotalPrice } = useCartStore();
  const subtotal = getTotalPrice();

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white px-4 sm:px-8 py-20">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl text-center font-(--font-heading) text-transparent bg-clip-text bg-gradient-to-r from-[#f5deb3] to-white mb-14">
        <ShoppingCart className="inline-block w-10 h-10 text-[#f5deb3] mr-3" />
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
                className="flex flex-col sm:flex-row items-center justify-between bg-[#111]/70 border border-[#f5deb3]/10 rounded-2xl p-5 sm:p-6 shadow-[0_0_25px_rgba(245,222,179,0.08)]">
                <div className="flex items-center gap-5">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-xl w-[6rem] sm:w-[8rem] object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-[#f5deb3]">
                      {item.name}
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">
                      ₹{item.price.toLocaleString()}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="p-1 border border-[#f5deb3]/40 rounded-full hover:bg-[#f5deb3]/10">
                        <Minus className="w-4 h-4 text-[#f5deb3]" />
                      </button>
                      <span className="text-[#f5deb3] font-semibold">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="p-1 border border-[#f5deb3]/40 rounded-full hover:bg-[#f5deb3]/10">
                        <Plus className="w-4 h-4 text-[#f5deb3]" />
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
                    className="flex items-center gap-1 mt-2 text-gray-400 hover:text-red-400 text-sm">
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
            className="bg-[#111]/70 border border-[#f5deb3]/10 rounded-2xl p-6 sm:p-8 shadow-[0_0_25px_rgba(245,222,179,0.08)] h-fit">
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
              className="w-full mt-8 py-3 flex items-center justify-center gap-2 rounded-full bg-[#f5deb3] text-black font-semibold shadow-[0_0_30px_rgba(245,222,179,0.4)] hover:shadow-[0_0_45px_rgba(245,222,179,0.5)] transition-all">
              Proceed to Checkout
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
