import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../images/logo.png";
import MenuItem from "../MenuItem/MenuItem";
import Button from "../Button/Button";
import { IMenuItem } from "../../models/IMenuItem";
import Subnav from "../Subnav/Subnav";
import Portal from "../Portal/Portal";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login, logout } from "../../store/auth-sclice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const menuItems: IMenuItem[] = [
  {
    text: "خانه",
    path: "/",
  },
  {
    text: "محصولات",
    path: "/products",
  },
  {
    text: "خدمات",
    path: "/services",
  },
  {
    text: "وبلاگ",
    path: "/blog",
  },
];

const Navbar = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const auth = useAppSelector((state) => state.auth.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authStorage = localStorage.getItem("auth");
    if (authStorage) {
      dispatch(login(JSON.parse(authStorage)));
    }
  }, []);

  return (
    <>
      {showAuthForm && (
        <Portal element="#modal">
          <Modal onClose={() => setShowAuthForm(false)}>
            <Login closePopup={() => setShowAuthForm(false)} />
          </Modal>
        </Portal>
      )}

      <Portal element="#sidebar">
        <MobileNavbar
          isShow={mobileNavbar}
          className={`${mobileNavbar ? "visible" : "invisible"}`}
          menuItems={menuItems}
          onClose={() => setMobileNavbar(false)}
        />
      </Portal>

      <header className="w-full h-32 md:py-36.5 custom-container flex items-center justify-between bg-white shadow-custom-1 sticky top-0">
        <div className="h-full flex justify-center items-center">
          <Image src={logo} alt="Code" width={82} height={82} />
          <nav className="h-full hidden md:flex items-center justify-center mr-156 md:mr-9">
            <ul className="h-full list-none flex items-center justify-center gap-16 lg:gap-20">
              {menuItems.map((item) => (
                <MenuItem key={item.path} path={item.path} text={item.text} />
              ))}
            </ul>
          </nav>
          <FontAwesomeIcon
            onClick={() => setMobileNavbar(true)}
            className="block md:hidden text-3xl mr-6 cursor-pointer"
            icon={faBars}
          />
        </div>
        {!auth && <Button onClick={() => setShowAuthForm(true)}>ورود</Button>}
        {auth && (
          <span
            className="cursor-pointer"
            onClick={() => dispatch(logout())}
          >{`${auth.fullName} خوش آمدی`}</span>
        )}
      </header>
      <div className="w-full custom-container mt-10">
        <Subnav menuItems={menuItems} />
      </div>
    </>
  );
};

export default Navbar;
