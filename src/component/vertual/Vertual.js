import React from "react";
import css from "./vertual.module.css";
import Shade from "../../assets/shade.png";
import ReactCompareImage from "react-compare-image";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";
const Vertual = () => {
  return (
    <div className={css.virtual}>
      <div className={css.left}>
        <span>Vertual Try-On</span>
        <span>Never Buy The wrong Product</span>
        <span>Try Now!</span>
        <img src={Shade} alt="" />
      </div>
      <div className={css.right}>
        <div className={css.wrapper}>
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  );
};

export default Vertual;
