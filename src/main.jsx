import React from "react";
import ReactDOM from "react-dom/client";
import "./css/tailwind.css";
import { PomodoroProvider } from "./shared/context/PomodoroContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PomodoroProvider>
      <App />
    </PomodoroProvider>
  </React.StrictMode>
);
