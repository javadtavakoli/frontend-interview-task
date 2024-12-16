import { useEffect, useState } from "react";

export interface ToastProps {
  message: string;
  duration?: number; // in milliseconds
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 px-4 py-2 rounded-md shadow-md bg-blue-500 text-white transition-opacity duration-300`}
    >
      {message}
    </div>
  );
};
export default Toast;
