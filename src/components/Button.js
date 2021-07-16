import React from "react";
import styles from "./Button.module.css";

function Button() {
  return (
    <span>
      <button className={styles.button}>Start my Trial</button>
    </span>
  );
}

export default Button;
