import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Login";
import ReadyPage from "../Dashboard/ReadyPage";
import OrdersPage from "../Dashboard/OrdersPage";
import Cart from "../Dashboard/ReadyPage/Basket";
import Cage from "../Checkout/Cage";
import Checkout from "../Checkout";
import CompanyRegister from "../Checkout/CompanyRegister";
import { ProductProvider } from "../Dashboard/Products/ProductContext/ProductContext";
import Visa from "../Checkout/Visa";
import Qpay from "../Checkout/Qpay";
import OrderNumber from "../Checkout/OrderNumber";
import { BasketProvider } from "../Dashboard/ReadyPage/Basket/BasketContext"; // 🛒 CartProvider нэмлээ

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <ProductProvider>
      <BasketProvider> 
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/order" element={<OrdersPage />} />
            <Route path="/ready" element={<ReadyPage />} />
            <Route path="/ready/basket" element={<Cart />} />
            <Route path="/cage" element={<Cage />} />
            <Route path="/cage/checkout" element={<Checkout />} />
            <Route path="/cage/checkout/company-register" element={<CompanyRegister />} />
            <Route path="/cage/checkout/visa" element={<Visa />} />
            <Route path="/cage/checkout/qpay" element={<Qpay />} />
            <Route path="/cage/checkout/ordernumber" element={<OrderNumber />} />
          </Routes>
        </Router>
      </BasketProvider>
    </ProductProvider>
  );
}

export default App;
