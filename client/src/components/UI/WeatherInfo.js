import React from "react";
import classes from "./WeatherInfo.module.css";

export default function WeatherInfo(props) {
  return (
    <div className={classes.container}>
      <div className={classes.weatherImage}>
        <img src={props.weatherIcon} alt="weatherIcon" />
      </div>
      <h1>
        {props.temperature}
        <sup>&deg;</sup>C
      </h1>

      <div className={classes.details}>
        <span>{props.weatherText}</span>
      </div>
    </div>
  );
}
