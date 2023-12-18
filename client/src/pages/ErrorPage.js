import React from "react";
import classes from "./ErrorPage.module.css";

import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className={classes.container}>
      <h1>404</h1>
      <div className={classes.content}>
        <h3>An error Occurred!</h3>
        <p>Could not find the page!</p>
        <Link to={"/"}>
          <h2>Home</h2>
        </Link>
      </div>
    </div>
  );
}
