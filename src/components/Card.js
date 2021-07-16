import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import Button from "./Button";
import Slider from "./Slider";
import ToggleSwitch from "./ToggleSwitch";

function Card() {
  const [views, setViews] = useState("100K");
  const [monthlyPrice, setMonthlyPrice] = useState("16.00");
  const [annualPrice, setAnnualPrice] = useState("167.00");
  const [showMonthly, setShowMonthly] = useState(true);
  const [sliderValue, setSliderValue] = useState("3");
  const [color, setColor] = useState(
    "linear-gradient(90deg, hsl(174, 86%, 45%) 50%, hsl(224, 65%, 95%) 50%)"
  );

  const updatePrice = (value) => {
    switch (value) {
      case "1": {
        setViews("10K");
        setAnnualPrice("63.00");
        setMonthlyPrice("8.00");
        setSliderValue(value);
        setColor(
          "linear-gradient(90deg, hsl(174, 86%, 45%) 0%, hsl(224, 65%, 95%) 0%)"
        );
        break;
      }
      case "2": {
        setViews("50K");
        setAnnualPrice("108.00");
        setMonthlyPrice("12.00");
        setSliderValue(value);
        setColor(
          "linear-gradient(90deg, hsl(174, 86%, 45%) 25%, hsl(224, 65%, 95%) 25%)"
        );
        break;
      }
      case "3": {
        setViews("100K");
        setAnnualPrice("167.00");
        setMonthlyPrice("16.00");
        setSliderValue(value);
        setColor(
          "linear-gradient(90deg, hsl(174, 86%, 45%) 50%, hsl(224, 65%, 95%) 50%)"
        );
        break;
      }
      case "4": {
        setViews("500K");
        setAnnualPrice("216.00");
        setMonthlyPrice("24.00");
        setSliderValue(value);
        setColor(
          "linear-gradient(90deg, hsl(174, 86%, 45%) 75%, hsl(224, 65%, 95%) 75%)"
        );
        break;
      }
      case "5": {
        setViews("1M");
        setAnnualPrice("324.00");
        setMonthlyPrice("36.00");
        setSliderValue(value);
        setColor(
          "linear-gradient(90deg, hsl(174, 86%, 45%) 100%, hsl(224, 65%, 95%) 100%)"
        );
        break;
      }
      default: {
        setViews("100K");
        setAnnualPrice("167.00");
        setMonthlyPrice("16.00");
        setColor(
          "linear-gradient(90deg, hsl(174, 86%, 45%) 50%, hsl(224, 65%, 95%) 50%)"
        );
        break;
      }
    }
  };

  function changePriceView() {
    if (showMonthly) {
      setShowMonthly(false);
    } else {
      setShowMonthly(true);
    }
  }

  const mobileView = (
    <div className={`${styles.card} ${styles.top}`}>
      <div className={styles.flexdiv}>
        <p className={styles.views}>{views} Pageviews</p>
        <Slider onPriceChange={updatePrice} color={color} value={sliderValue} />
        <span>
          <h1 className={styles.price}>
            ${showMonthly ? monthlyPrice : annualPrice}
          </h1>
          <span className={styles.monthly}>
            {" "}
            / {showMonthly ? "month" : "year"}
          </span>
        </span>
      </div>
      <ToggleSwitch onChangePriceView={changePriceView} />
    </div>
  );

  const desktopView = (
    <div className={`${styles.card} ${styles.top}`}>
      <div className={styles.flexdiv}>
        <span className={styles.views}>{views} Pageviews</span>
        <span>
          <h1 className={styles.price}>
            ${showMonthly ? monthlyPrice : annualPrice}
          </h1>
          <span className={styles.monthly}>
            {" "}
            / {showMonthly ? "month" : "year"}
          </span>
        </span>
      </div>
      <Slider onPriceChange={updatePrice} color={color} value={sliderValue} />
      <ToggleSwitch onChangePriceView={changePriceView} />
    </div>
  );

  let screenWidth = window.innerWidth;
  const [desktop, setDesktop] = useState(null);

  useEffect(() => {
    let initialState = null;
    screenWidth > 500 ? (initialState = true) : (initialState = false);
    setDesktop(initialState);
  }, [screenWidth]);

  window.addEventListener("resize", () => {
    if (screenWidth > 500) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
  });

  return (
    <div className={styles.container}>
      {desktop ? desktopView : mobileView}

      <div className={`${styles.card} ${styles.bottom}`}>
        <ul>
          <li>
            <span className={styles.check}></span>Unlimited websites
          </li>
          <li>
            <span className={styles.check}></span>100% data ownership
          </li>
          <li>
            <span className={styles.check}></span>Email reports
          </li>
        </ul>
        <Button />
      </div>
    </div>
  );
}

export default Card;
