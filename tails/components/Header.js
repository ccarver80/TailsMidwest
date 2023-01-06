import React from "react";
import Image from "next/image";
import logo from "../public/imgs/Logo.png";
import styles from "../styles/Header.module.css";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Image src={logo} className={styles.header__image} />
      </div>
      <NavBar />
    </>
  );
};
