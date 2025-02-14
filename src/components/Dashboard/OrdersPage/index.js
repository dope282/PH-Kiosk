import React from "react";
import ReadyOrdered from "../Toolbar";
import Controll from "../Controller/Control";
import Product from "../OrderProduct";
const OrdersPage = () => {
    return (
        <div>
            <ReadyOrdered/>
            <Product/>
            <Controll/>
        </div>
    )
}
export default OrdersPage;