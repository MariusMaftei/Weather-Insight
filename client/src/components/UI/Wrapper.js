import React, { useContext } from "react";
import classes from "./Wrapper.module.css";
import { AmbientContext } from "../../context/ambient-context";

export default function Wrapper(props) {
  const { isActive } = useContext(AmbientContext);
  const wrapperColor = isActive
    ? classes.dayWrapperAmbient
    : classes.nightWrapperAmbient;
  return (
    <div className={`${classes.wrapper} ${wrapperColor}`}>{props.children}</div>
  );
}
