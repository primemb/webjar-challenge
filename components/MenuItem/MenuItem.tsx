import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IMenuItem } from "../../models/IMenuItem";

const MenuItem = ({ text, path }: IMenuItem) => {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const isActive = router.pathname === path;

  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={path}
      className={`h-full flex items-center justify-center relative`}
    >
      {text}
      <span
        className={`absolute w-150% h-1 bg-brand-green-1 top-90 transition-all ${
          isActive || hover ? "visible" : "invisible"
        }`}
      />
    </Link>
  );
};

export default MenuItem;
