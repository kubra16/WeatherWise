import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <p className={styles.logo}>Weather wise </p>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/favorites">My favorite </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
