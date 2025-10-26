import { create } from "zustand";
import { persist } from "zustand/middleware";
import useSnackbarStore from "./snackbarStore";

const show = useSnackbarStore.getState().showSnackbar;

const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],

            addToCart: (product) => {
                const existing = get().cart.find((item) => item.id === product.id);
                if (existing) {
                    set({
                        cart: get().cart.map((item) =>
                            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                        ),
                    });
                    show(`${product.name} quantity updated`, "info");
                } else {
                    set({ cart: [...get().cart, { ...product, qty: 1 }] });
                    show(`${product.name} added to cart`, "success");
                }
            },

            removeFromCart: (id) => {
                const product = get().cart.find((item) => item.id === id);
                set({ cart: get().cart.filter((item) => item.id !== id) });
                show(`${product?.name || "Item"} removed`, "warning");
            },

            updateQty: (id, qty) => {
                set({
                    cart: get().cart.map((item) =>
                        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
                    ),
                });
                show(`Quantity updated`, "info");
            },

            clearCart: () => {
                set({ cart: [] });
                show("Cart cleared", "error");
            },

            getTotalPrice: () =>
                get().cart.reduce((sum, item) => sum + item.price * item.qty, 0),

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
