import React from "react";
import MenuItem from "./MenuItem";
function Menu() {
    return(
        <div>
            <ul className="test">
                <MenuItem active link="/Zahialga">ЗАХИАЛГЫН БАРАА</MenuItem>
                <MenuItem link="/Belen">БЭЛЭН БАРАА</MenuItem>
            </ul>
        </div>
    )
}
export default Menu;