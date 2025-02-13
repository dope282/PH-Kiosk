import React from "react";
import css from "./style.module.css";
import { useNavigate } from "react-router-dom";
import Controll from "./Control";
import Product from "../Product";
const Controller = (props) => {
    let content = <p>baraagaa songono uu</p>
    console.log(props.productsInfo)
    return (
        <div >
            <Product status="irsen baraa"/>
            {content}
            <Controll/>
        </div>
    );
};

export default Controller;