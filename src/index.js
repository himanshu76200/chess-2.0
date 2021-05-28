import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { isMobile } from "react-device-detect";
import { TouchBackend } from "react-dnd-touch-backend";

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <App />
    </DndProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
