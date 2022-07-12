import React from "react";
// import { BasicTable } from "./BasicTable";
import { APIDataTable } from "./APIDataTable";
// import "./styles.css";
import './table.css'

export default function Table() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      <APIDataTable />
    </div>
  );
}
