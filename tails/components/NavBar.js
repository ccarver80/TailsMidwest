import React from "react";
import styles from "../styles/NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBar__mobile}>
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="btn btn-secondary m-1">
            Menu
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Foster or Adobt</a>
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
        <button>About</button>
        <button>Foster or Adobt</button>
        <button>Adoptable Animals</button>
        <button>Surrender Form</button>
        <button>Donations</button>
        <button>Swag</button>
        <button>Events</button>
        <button>Partners</button>
        <button>Contact Us</button>
      </div>
    </div>
  );
};
