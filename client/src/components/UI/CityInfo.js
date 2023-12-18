import React from "react";
import classes from "./CityInfo.module.css";

export default function CityInfo(props) {
  return (
    <div className={classes.container}>
      <img src={props.flagIcon} alt="flagIcon" />
      <h5>{props.countryName}</h5>
      <h4>{props.capitalName}</h4>
      <span>Latitude: {props.latitudeValue}</span>
      <span>Longitude: {props.longitudeValue}</span>
    </div>
  );
}
