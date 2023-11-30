// global css imports
import "./css/base-min.css";
import "./css/pure-min.css";
import "./css/grids-responsive-min.css";
import "./style.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { MainPage } from "./pages/MainPage";

const body = document.getElementsByTagName("body")[0];
const rootElement = document.createElement("div");
rootElement.id = "root";
body.append(rootElement);

const root = createRoot(rootElement);
root.render(<MainPage />);
