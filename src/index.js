// import React from 'react';
import App from "./App";
// import Table from "./components/dashboard/Table/Table";
import reportWebVitals from "./reportWebVitals";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
