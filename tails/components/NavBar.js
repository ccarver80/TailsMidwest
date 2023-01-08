import React from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBar__mobile}>
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="m-1 btn btn-secondary">
            Menu
          </label>
          <ul
            tabIndex={0}
            className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">
                <button>About</button>
              </Link>
            </li>
            <li>
              <Link href="/apply">Foster or Adopt</Link>
            </li>
            <li>
              <a>Adoptable Animals</a>
            </li>
            <li>
              <a>Surrender Form</a>
            </li>
            <li>
              <a>Donations</a>
            </li>
            <li>
              <a>Swag +</a>
            </li>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>Partners</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.navBar__desktop}>
        <Link href="/">
          <button>About</button>
        </Link>
        <Link href="/apply">
          <button>Foster or Adopt</button>
        </Link>
        <Link href="">
          <button>Adoptable Animals</button>
        </Link>
        <Link href="">
          <button>Surrender Form</button>
        </Link>
        <Link href="">
          <button>Donations</button>
        </Link>
        <Link href="">
          <button>Swag</button>
        </Link>
        <Link href="">
          <button>Events</button>
        </Link>
        <Link href="">
          <button>Partners</button>
        </Link>
        <Link href="">
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};
