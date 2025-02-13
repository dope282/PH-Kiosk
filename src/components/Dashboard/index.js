import React, { useState } from "react";
import css from "./style.module.css";
import Menu from "../Menu";
import ReadyOrdered from "./Toolbar";
import Products from "./Products";
import Contoller from "./Controller";
function Dashboard() {
    return (
      <div className={css.menu}>
        <ReadyOrdered/>
        <Products/>
      </div>
    );
  }
export default Dashboard;