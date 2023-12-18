import React, { useContext } from "react";
import classes from "./AmbientButton.module.css";
import { AmbientContext } from "../../context/ambient-context";

export default function AmbientButton() {
  const { isActive, toggleActive } = useContext(AmbientContext);

  const handleButtonClick = () => {
    toggleActive();
  };

  return (
    <div className={classes.container}>
      <div className={classes.button}>
        <div
          className={`${classes.off} ${classes.selection} ${
            isActive ? classes.active : ""
          }`}
          onClick={handleButtonClick}
        ></div>
        <div
          className={`${classes.on} ${classes.selection} ${
            !isActive ? classes.active : ""
          }`}
          onClick={handleButtonClick}
        ></div>
      </div>
    </div>
  );
}
