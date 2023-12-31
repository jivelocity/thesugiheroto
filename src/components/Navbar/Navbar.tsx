import React from "react";

import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <a className={styles.logo} href="/">
          <p>S</p>
        </a>
        <ul>
          <li>
            <a href="/overview">Overview</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.button}>
        <p>Punya Project?</p>
      </div>
    </div>
  );
};

export default Navbar;
