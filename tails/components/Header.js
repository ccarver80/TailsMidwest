import React from "react";
import Image from "next/image";
import logo from "../styles/imgs/Logo.png";
import styles from "../styles/Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} className={styles.image} />
      </div>
    </div>
  );
};
