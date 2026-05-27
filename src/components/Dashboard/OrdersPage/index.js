import React from "react";
import ReadyOrdered from "../Toolbar";
import Controll from "../Controller/Control";
import Product from "./OrderProduct";
import background from "../../../assets/background.png";
const OrdersPage = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="bg-cover bg-center w-screen h-screen ">
            <ReadyOrdered/>
                <Product/>
                <Controll/>
        </div>
    )
}
export default OrdersPage;