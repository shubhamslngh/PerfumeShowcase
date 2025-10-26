"use client";
import { motion, AnimatePresence } from "framer-motion";
import useSnackbarStore from "@/store/snackbarStore";
import { CheckCircle2, AlertCircle, Info, XCircle } from "lucide-react";

export default function Snackbar() {
  const { open, message, type } = useSnackbarStore();

  const icons = {
    success: <CheckCircle2 className="text-green-400 w-5 h-5" />,
    error: <XCircle className="text-red-400 w-5 h-5" />,
    warning: <AlertCircle className="text-yellow-400 w-5 h-5" />,
    info: <Info className="text-blue-400 w-5 h-5" />,
  };

  const bgColors = {
    success: "bg-green-900/70 border-green-500/40",
    error: "bg-red-900/70 border-red-500/40",
    warning: "bg-yellow-900/70 border-yellow-500/40",
    info: "bg-blue-900/70 border-blue-500/40",
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="snackbar"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 text-sm flex items-center gap-3 px-5 py-3 rounded-full border shadow-lg backdrop-blur-md ${bgColors[type]} text-white z-[9999]`}>
          {icons[type]}
          <span className="tracking-wide">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
