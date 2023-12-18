import React, { useContext, useState } from "react";
import classes from "./Header.module.css";
import AmbientButton from "../UI/AmbientButton";
import webLogo from "../../assets/images/logo_img.png";
import { Link } from "react-router-dom";
import { Context } from "../../context/auth-context";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, dispatch } = useContext(Context);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const activeMenu = `${menuOpen ? classes.activeMenu : ""}`;
  const activeList = `${menuOpen ? classes.activeList : ""}`;
  const hamburgerWrapper = `${classes.hamburgerWrapper} ${
    menuOpen ? classes.active : ""
  }`;

  return (
    <header className={activeMenu}>
      <div className={classes.navigationLinks}>
        <div className={classes.firstList}>
          <a href={"/"}>
            <img src={webLogo} alt="img" />
          </a>
        </div>

        <div className={classes.secondList}>
          <ul className={activeList}>
            <li>
              <a href={"/"}>Home</a>
            </li>
            <li>
              <Link to={"/favorite"}>My Locations</Link>
            </li>
            <li>
              {!user && (
                <span>
                  <Link to={"/login"}>Login</Link>
                </span>
              )}
              {user && (
                <span>
                  {" "}
                  <Link to={"/login"} onClick={handleLogout}>
                    Logout{" "}
                  </Link>
                </span>
              )}
            </li>
          </ul>
        </div>

        <div className={classes.thirdList}>
          <ul>
            <li>{<AmbientButton />}</li>
          </ul>
        </div>
      </div>

      <div className={hamburgerWrapper} onClick={toggleMenu}>
        <div className={classes.hamburgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
