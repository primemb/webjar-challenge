import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { text } from "stream/consumers";
import { IMenuItem } from "../../models/IMenuItem";

interface IMobileNavbar {
  isShow: boolean;
  menuItems: IMenuItem[];
  onClose: () => void;
  className?: string;
}

const MobileNavbar = ({
  isShow,
  onClose,
  menuItems,
  className = "",
}: IMobileNavbar) => {
  const router = useRouter();
  return (
    <div
      onClick={onClose}
      className={`fixed flex flex-row-reverse w-full h-full bg-brand-grey-4 z-40 top-0 left-0 ${className}`}
    >
      <nav
        onClick={(e) => e.stopPropagation()}
        className={`flex items-center justify-center h-full w-9/12 bg-white -translate-x-760 transition-all duration-500 ${
          isShow ? "translate-x-0" : ""
        }`}
      >
        <ul className="list-none flex flex-col items-center justify-center">
          {menuItems.map((item) => (
            <Link
              onClick={onClose}
              className={`py-6 ${
                router.pathname === item.path
                  ? "text-brand-green-1"
                  : "text-black"
              }`}
              href={item.path}
            >
              {item.text}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavbar;
