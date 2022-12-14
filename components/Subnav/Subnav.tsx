import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React from "react";
import { IMenuItem } from "../../models/IMenuItem";

interface ISubnavProps {
  menuItems: IMenuItem[];
}

const Subnav = ({ menuItems }: ISubnavProps) => {
  const router = useRouter();
  const getCurrentLabel = () => {
    const item = menuItems.find((item) => item.path === router.pathname);
    return item?.text || "404";
  };
  return (
    <div className="flex items-center justify-start gap-2">
      <span className="text-xl">خانه</span>
      <FontAwesomeIcon size="xs" icon={faChevronLeft} />
      <span className="text-xl text-brand-green-1">{getCurrentLabel()}</span>
    </div>
  );
};

export default Subnav;
