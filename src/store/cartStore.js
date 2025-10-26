import { create } from "zustand";
import { persist } from "zustand/middleware";
import { parsePrice } from "@/utils/parsePrice";

const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],

            /** ─────────────── Add Item ─────────────── **/
            addToCart: (product) => {
                const existing = get().cart.find((item) => item.id === product.id);
                const cleanPrice = parsePrice(product.price);

                if (existing) {
                    set({
                        cart: get().cart.map((item) =>
                            item.id === product.id
                                ? { ...item, qty: item.qty + 1 }
                                : item
                        ),
                    });
                } else {
                    set({
                        cart: [
                            ...get().cart,
                            { ...product, price: cleanPrice, qty: 1 },
                        ],
                    });
                }
            },

            /** ─────────────── Remove Item ─────────────── **/
            removeFromCart: (id) =>
                set({
                    cart: get().cart.filter((item) => item.id !== id),
                }),

            /** ─────────────── Update Quantity ─────────────── **/
            updateQty: (id, qty) =>
                set({
                    cart: get().cart.map((item) =>
                        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
                    ),
                }),

            /** ─────────────── Clear Cart ─────────────── **/
            clearCart: () => set({ cart: [] }),

            /** ─────────────── Computed Values ─────────────── **/
            getTotalPrice: () =>
                get().cart.reduce(
                    (sum, item) => sum + parsePrice(item.price) * item.qty,
                    0
                ),

            getTotalItems: () =>
                get().cart.reduce((sum, item) => sum + item.qty, 0),
        }),
        {
            name: "barun-perfume-cart",
            getStorage: () => localStorage,
        }
    )
);

export default useCartStore;
