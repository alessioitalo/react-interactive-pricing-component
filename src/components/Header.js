import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles["header-container"]}>
      <p className={styles.header}>Simple, traffic-based pricing</p>
      <p className={styles.subheader}>Sign-up for our 30-day trial.</p>
      <p className={styles.subheader}>No credit card required.</p>
    </div>
  );
}

export default Header;
