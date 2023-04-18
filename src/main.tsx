import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StateContextProvider } from "./context/StateContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <BrowserRouter>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </BrowserRouter>

);
