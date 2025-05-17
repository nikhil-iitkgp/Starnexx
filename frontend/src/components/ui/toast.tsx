import React, { useEffect } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = "success",
  onClose,
  duration = 3500,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`
      fixed top-6 right-6 z-[9999] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3
      ${type === "success" ? "bg-amber-400 text-white" : "bg-red-500 text-white"}
      animate-fade-in
      border-2 ${type === "success" ? "border-amber-500" : "border-red-600"}
      min-w-[250px] max-w-xs
    `}>
      {type === "success" ? (
        <CheckCircle className="w-6 h-6 text-white" />
      ) : (
        <XCircle className="w-6 h-6 text-white" />
      )}
      <span className="font-semibold flex-1">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-white hover:text-gray-200 transition"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Toast;