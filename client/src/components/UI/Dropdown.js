import React, { useState } from "react";
import classes from "./Dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "./LoadingSpinner";

export default function Dropdown(props) {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [dropdownErrorMessage, setDropdownErrorMessage] = useState(false);

  const handleOptionClick = (option) => {
    props.setSelected(option);
    setActiveDropdown(false);
    setDropdownErrorMessage(false);
    props.onSelect(option);
  };

  return (
    <div className={classes.container}>
      <div className={classes.dropdown}>
        <div
          onClick={() => setActiveDropdown(!activeDropdown)}
          className={classes.content}
        >
          <span>{props.selected}</span>
          <span className={classes.arrow}>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </div>
        {activeDropdown && (
          <ul className={classes.listItems}>
            {props.costumeOptions.length === 0 ? (
              <li className={classes.item}>
                <span className={classes.itemText}>
                  <LoadingSpinner />
                </span>
              </li>
            ) : (
              props.costumeOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={classes.item}
                >
                  <span className={classes.itemText}>{option}</span>
                </li>
              ))
            )}
          </ul>
        )}
        <div className={classes.errorMessage}>
          {/* <span>{dropdownErrorMessage}Please select an option</span> */}
        </div>
      </div>
    </div>
  );
}
