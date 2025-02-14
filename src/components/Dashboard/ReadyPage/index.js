import React from "react";
import ReadyOrdered from "../Toolbar";
import Controll from "../Controller/Control";
import BasketIcon from "./Basket";
import ReadyProduct from "../ReadyProduct";
const ReadyPage = () => {
    return (
        <div>
            <ReadyOrdered/>
            <BasketIcon/>
            <ReadyProduct/>
            <Controll/>
        </div>
    )
}
export default ReadyPage;