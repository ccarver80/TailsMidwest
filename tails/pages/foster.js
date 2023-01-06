import React from "react";
import { Header } from "../components";
import styles from "../styles/Foster.module.css";

export default function Foster() {
  return (
    <>
      <div className={styles.foster}>
        <Header />
        <div className={styles.foster__buttonContainer}>
          <button>Adopt</button>
          <h1>Or</h1>
          <button>Foster</button>
        </div>
      </div>
    </>
  );
}
