import Toast, { ToastProps } from "./Toast.tsx";
import React, { createContext, useContext, useState } from "react";

interface ToastContextProps {
  addToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (message: string) => {
    setToasts((prevToasts) => [
      ...prevToasts,
      { message, duration: 3000, onClose: () => removeToast(message) },
    ]);
  };

  const removeToast = (message: string) => {
    setToasts((prevToasts) =>
      prevToasts.filter((toast) => toast.message !== message),
    );
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Render all toasts */}
      {toasts.map((toast, index) => (
        <Toast key={index} {...toast} />
      ))}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
