import React, { useState } from "react";
import { Header } from "../../components/main";
import Logo from "../../components/main/Logo";
import styles from "./styles.module.css";
import { AdoptModal } from "../../components/modals/adopt";
import { FosterModal } from "../../components/modals/foster";

export default function adoptMain() {
  const [adoptModal, setAdoptModal] = useState(false);
  const [fosterModal, setFosterModal] = useState(false);
  return (
    <>
      <AdoptModal />
      <div className={styles.adoptMain}>
        <Header />

        <div className={styles.adoptMain__buttonContainer}>
          <button onClick={() => setAdoptModal(true)}>Adopt</button>
          <div className={styles.adoptMain__logo}>
            <Logo />
            <button className="mx-auto mt-10 scale-150 w-fit">Surrender</button>
          </div>

          <button onClick={() => setFosterModal(true)}>Foster</button>
        </div>

        <AdoptModal
          isOpen={adoptModal}
          closeModal={() => setAdoptModal(false)}
        />

        <FosterModal
          isOpen={fosterModal}
          closeModal={() => setFosterModal(false)}
        />
      </div>
    </>
  );
}
