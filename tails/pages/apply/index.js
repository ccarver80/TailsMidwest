import React from "react";
import Link from "next/link";
import { Header } from "../../components";
import styles from "../../styles/Apply.module.css";
import Logo from "../../components/Logo";

export default function Foster() {
  return (
    <>
      <div className={styles.foster}>
        <Header />

        <div className={styles.foster__buttonContainer}>
          <Link href="/apply/adopt">
            <button>Adopt</button>
          </Link>
          <div className={styles.foster__logo}>
            <Logo />
          </div>

          <Link href="/apply/foster">
            <button>Foster</button>
          </Link>
        </div>
      </div>
    </>
  );
}
