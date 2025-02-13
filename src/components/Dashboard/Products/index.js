import React, { Component } from "react";
import css from "./style.module.css";
import { useState } from "react";
import Controller from "../Controller";
import { useNavigate } from "react-router-dom";
class Products  extends Component {

    state = {
        productsInfo: {
            cost: 8500,
            cargoCost: 5500,
            name: "Машины суудал",
            code: 1,
            piece: 2,
            img: "C:\Users\dell\Desktop\Jamka\Жамсранжав\React эхнээс нь дуустал.png"
        }
    }
//     const navigate = useNavigate();
//     const [selectedProducts, setSelectedProducts] = useState([]);
//   state 
//   const handleSelectProduct = (product) => {
//     setSelectedProducts((prev) =>
//       prev.includes(product) ? prev.filter((p) => p !== product) : [...prev, product]
//     );
//   };
//   const totalCost = selectedProducts.length * 5500 ;
render() {
    return (
        <div>
            {/* {products.map((product) => (
                <div key={product.id}>
              <input type="checkbox" onChange={() => handleSelectProduct(product)} />
              <label>{product.name} - {product.price}₮</label>
            </div>
          ))} */}
          <Controller productsInfo={this.state.productsInfo}/>
          </div>
    );
};
}
export default Products;