import React from "react";
import Image from "next/image";
import logo from "../../public/imgs/logoText.png";
import { Header } from "../../components";
import styles from "../../styles/Foster.module.css";

export default function Foster() {
  return (
    <div className={styles.foster}>
      <Header />

      <div className={styles.foster__header}>
        <Image src={logo} />
        <h1>Foster Application</h1>
      </div>

      <div className={styles.foster__description}>
        <h2>
          To qualify as a foster for Tails of the Midwest Rescue you must:
        </h2>

        <ul>
          <li>Be at least 21-years of age</li>
          <li>If you rent, you must have consent from your landlord.</li>
          <li>
            All animals in your home must be spayed/neutered if they are 6
            months or older, unless there are medical reasons for not doing so.
          </li>
          <li>All animals in the home must be up to date with vaccinations.</li>
          <li>
            Agree to have a home visit done by a Tails of the Midwest Rescue
            representative.
          </li>
          <li>
            Agree to have the animal wear a Tails of the Midwest Rescue ID tag
            on its collar at all times when it public or outdoors.
          </li>
          <li>
            Agree to never allow the foster animal to be off leash when it’s
            outdoors, unless it is in a securely fenced in area.
          </li>
          <li>
            Agree to have the foster animal reside in the home, not outside. The
            foster animal may not be left outdoors when you are not at home.
            This includes outdoor kennel runs.
          </li>
          <li>
            Agree to never allow foster dog to be left unattended with young
            children.
          </li>
        </ul>
      </div>
    </div>
  );
}
