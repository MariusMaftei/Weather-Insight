import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className={classes.footerContent}>
        <h3>Weather Insight</h3>
        <p>
          Explore the latest weather updates and geographical insights with
          Weather Insight. Connect with us through our social media channels and
          newsletters to stay abreast of real-time weather data and discover new
          features seamlessly integrated with Google Maps.
        </p>
        <ul className={classes.socials}>
          <li>
            <Link to={"google.com"}>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </li>
          <li>
            <Link to={"google.com"}>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li>
            <Link to={"google.com"}>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li>
            <Link to={"google.com"}>
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </li>
          <li>
            <Link to={"google.com"}>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.footerBottom}>
        <p>
          copyright &copy;2023 Weather Insight. designed by{" "}
          <span>Marius Maftei</span>
        </p>
      </div>
    </footer>
  );
}
