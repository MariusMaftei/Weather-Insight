import { createContext, useState } from "react";
import classes from "../components/UI/Ambient.module.css";

export const AmbientContext = createContext({});

export const AmbientProvider = ({ children }) => {
  const [isActive, setActive] = useState(false);

  const changeAmbient = isActive ? classes.dayAmbient : classes.nightAmbient;

  const toggleActive = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <AmbientContext.Provider value={{ isActive, toggleActive, changeAmbient }}>
      {children}
    </AmbientContext.Provider>
  );
};
