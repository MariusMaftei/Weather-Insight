import React, { useContext } from "react";
import { AmbientContext } from "../../context/ambient-context";

export default function Ambient(props) {
  const { changeAmbient } = useContext(AmbientContext);

  return <div className={changeAmbient}>{props.children}</div>;
}
