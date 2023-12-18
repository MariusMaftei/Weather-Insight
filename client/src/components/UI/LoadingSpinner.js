import React from "react";
import classes from "./LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={classes.container}>
      <section>
        <div className={classes.loader}>
          {[...Array(20)].map((_, i) => (
            <span key={i} style={{ "--i": i + 1 }}></span>
          ))}
        </div>
        <span>Searching...</span>
      </section>
    </div>
  );
}
