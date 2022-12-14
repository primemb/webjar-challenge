import React, { ReactNode } from "react";

interface IButtonProps {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  buttonType?: "submit" | "button";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  type = "primary",
  buttonType = "button",
  className,
  disabled,
}: IButtonProps) => {
  const makeClasses = () => {
    if (type === "primary") {
      return "text-brand-green-1 hover:bg-brand-green-1 hover:text-white";
    } else {
      return "bg-brand-green-1 text-white hover:bg-transparent hover:text-brand-green-1";
    }
  };

  return (
    <button
      disabled={disabled}
      type={buttonType}
      onClick={onClick ? onClick : undefined}
      className={`disabled:hover:bg-brand-green-1 disabled:bg-opacity-70 disabled:hover:bg-opacity-70 disabled:hover:text-white px-8 md:px-16 py-4 border border-brand-green-1 rounded-2xl transition-colors ${makeClasses()} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
