import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AmbientProvider } from "./context/ambient-context";
import { ContextProvider } from "./context/auth-context";
import Ambient from "./components/UI/Ambient";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <AmbientProvider>
        <Ambient>
          <App />
        </Ambient>
      </AmbientProvider>
    </ContextProvider>
  </React.StrictMode>
);
