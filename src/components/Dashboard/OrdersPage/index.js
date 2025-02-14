import React from "react";
import OrderState from "./OrderState";
import ReadyOrdered from "../Toolbar";
import Controll from "../Controller/Control";
import Product from "../Product";
const OrdersPage = () => {
    return (
        <div>
            <ReadyOrdered/>
            {/* <OrderState/> */}
            {/* Барааны төлөвөө сонгоно уу. */}
            <Product/>
            <Controll/>
        </div>
    )
}
export default OrdersPage;