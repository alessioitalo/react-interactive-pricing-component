import React, { useState, useEffect } from "react";
import styles from "./ToggleSwitch.module.css";

function ToggleSwitch(props) {
  let priceSpanMobile = <span className={styles.discount}>-25%</span>;
  let priceSpanDesktop = <span className={styles.discount}>-25% discount</span>;
  let screenWidth = window.innerWidth;

  const [desktop, setDesktop] = useState(null);

  useEffect(() => {
    let initialState = null;
    screenWidth > 500 ? (initialState = true) : (initialState = false);
    setDesktop(initialState);
    return ()=>{setDesktop(null)}
  }, [screenWidth]);

  window.addEventListener("resize", () => {
    if (screenWidth > 500) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
  });

  return (
    <span className={styles["switch-container"]}>
      <span className={styles.monthly}>Monthly Billing</span>
      <label className={styles.switch}>
        <input type="checkbox" onChange={props.onChangePriceView} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <span>Yearly Billing{desktop ? priceSpanDesktop : priceSpanMobile}</span>
    </span>
  );
}

export default ToggleSwitch;
