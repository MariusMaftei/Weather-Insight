import React, { useContext } from "react";
import classes from "./Card.module.css";
import { AmbientContext } from "../../context/ambient-context";

export default function Card(props) {
  const { isActive } = useContext(AmbientContext);

  const ambientCardClass = isActive ? classes.dayCard : classes.nightCard;

  return (
    <div className={`${classes.card} ${ambientCardClass}`}>
      <ul>
        <li>
          <h4>{props.title}</h4>
        </li>
        <li>
          <h6>{props.description}</h6>
        </li>
      </ul>
      <div>{props.children}</div>
    </div>
  );
}
