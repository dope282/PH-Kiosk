import React from "react";
import ReadyOrdered from "../Toolbar";
import BasketIcon from "./Basket/BasketIcon";
import ReadyProduct from "./ReadyProduct";
import background from "../../../assets/background.png";
const ReadyPage = () => {
    return (
        <div style={{backgroundImage: `url(${background})`}} className="bg-cover bg-center w-screen h-screen">
        <BasketIcon/>
            <ReadyOrdered/>
            <ReadyProduct/>
        </div>
    )
}
export default ReadyPage;