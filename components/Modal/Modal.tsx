import React from "react";

interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: IModalProps) => {
  return (
    <div
      onClick={onClose}
      className="fixed flex items-center justify-center w-full h-full bg-brand-grey-4 z-40 top-0 px-2"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-11/12 md:w-7/12 bg-white z-50"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
