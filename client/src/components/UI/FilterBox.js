import React from "react";
import classes from "./FilterBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

export default function FilterBox(props) {
  return (
    <div onClick={props.onClearFilter} className={classes.filterBox}>
      <p>{props.filteredItem}</p>
      <FontAwesomeIcon icon={faRemove} />
    </div>
  );
}
