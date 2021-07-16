import React from "react";
import Header from "./Header";
import styles from "./Wrapper.module.css";

function Wrapper(props) {
  return (
    <div className={styles.wrapper}>
      <Header />
      {props.children}
    </div>
  );
}

export default Wrapper;
