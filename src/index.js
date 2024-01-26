import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import app from "./firebase";
import Context, { FirebaseContext } from "./context/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseContext.Provider value={app}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>
);
