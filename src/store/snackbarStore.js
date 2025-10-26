import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSnackbarStore = create(
    persist(
        (set) => ({
            open: false,
            message: "",
            type: "info", // success | error | warning | info

            showSnackbar: (msg, type = "info") => {
                set({ open: true, message: msg, type });
                setTimeout(() => set({ open: false }), 2500);
            },
        }),
        { name: "barun-snackbar", getStorage: () => localStorage }
    )
);

export default useSnackbarStore;
