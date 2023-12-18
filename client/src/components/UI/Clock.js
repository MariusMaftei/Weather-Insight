import React, { useEffect, useState } from "react";
import classes from "./Clock.module.css";

const Clock = (props) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    function getCurrentTime() {
      const date = new Date();
      setCurrentTime(date);
    }

    getCurrentTime();

    const intervalId = setInterval(getCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const budapestTime = currentTime.toLocaleTimeString("en-US", {
    timeZone: props.timeZone,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  const [currentHours, currentMinutes, currentSeconds] = budapestTime
    .split(":")
    .map(Number);

  const numberElement = [];
  const barElement = [];

  for (let i = 1; i <= 12; i++) {
    numberElement.push(
      <span key={i} style={{ "--index": i }}>
        <p>{i}</p>
      </span>
    );
  }

  for (let i = 1; i <= 60; i++) {
    barElement.push(
      <span key={i} style={{ "--index": i }}>
        <p></p>
      </span>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes["bar-seconds"]}>{barElement}</div>
        <div className={classes["number-hours"]}>{numberElement}</div>

        <div className={classes["hands-box"]}>
          <div
            className={classes.hand + " " + classes.hours}
            style={{
              transform: `rotate(${currentHours * 30 + currentMinutes / 2}deg)`,
            }}
          >
            <i
              style={{ width: "4px", height: "40px", background: "#FFCC33" }}
            ></i>
          </div>
          <div
            className={classes.hand + " " + classes.minutes}
            style={{ transform: `rotate(${currentMinutes * 6}deg)` }}
          >
            <i
              style={{ width: "4px", height: "56px", background: "#FFCC33" }}
            ></i>
          </div>
          <div
            className={classes.hand + " " + classes.seconds}
            style={{ transform: `rotate(${currentSeconds * 6}deg)` }}
          >
            <i
              style={{
                width: "2px",
                height: "calc(55px + 18px)",
                background: "#FFCC33",
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
