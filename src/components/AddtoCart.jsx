"use client";
import useCartStore from "@/store/cartStore";

export default function ProductActions({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  // Clean price before adding to cart
  const sanitizePrice = (value) => {
    if (typeof value === "number") return value;
    if (typeof value === "string") {
      return Number(value.replace(/[₹,]/g, "").trim()) || 0;
    }
    return 0;
  };

  const handleAddToCart = () => {
    const cleanProduct = {
      ...product,
      price: sanitizePrice(product.price),
    };
    addToCart(cleanProduct);
  };

  return (
    <div className="flex gap-4 mt-6">
      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="px-6 py-3 border border-[#ffcb9a]/50 rounded-full text-[#ffcb9a] hover:bg-[#ffcb9a]/10 transition-all">
        Add to Cart
      </button>

      {/* View Details Button */}
      <button className="px-6 py-3 border border-[#ffcb9a]/50 rounded-full text-[#ffcb9a] hover:bg-[#ffcb9a]/10 transition-all">
        View Details
          </button>
          
    </div>
  );
}
