import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black  bg-opacity-50">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-400">
          <h2 className="text-lg font-medium dark:text-white">{title}</h2>
          <button
            className="text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-400"
            onClick={onClose}
          >
            &#x2715;
          </button>
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
