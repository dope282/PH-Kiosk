import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from "react-router-dom";
import Login from '../Login';
import Dashboard from '../Dashboard';
import ReadyPage from "../Dashboard/ReadyPage";
import OrderState from '../Dashboard/OrdersPage/OrderState';
import OrdersPage from '../Dashboard/OrdersPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/order" element={<OrdersPage/>} />
        <Route path="/order/arrived" element={<OrdersPage/>} />
        <Route path="/order/waiting" element={<OrdersPage/>} />
        <Route path="/order/accepted" element={<OrdersPage/>} />
        <Route path="/order/cancelled" element={<OrdersPage/>} />
        <Route path="/order/order-number" element={<OrdersPage/>} />
        <Route path="/ready" element={<ReadyPage/>} />
        <Route path="/ready/costco" element={<ReadyPage/>} />
        <Route path="/ready/playhouse" element={<ReadyPage/>} />
        <Route path="/ready/fresh-food" element={<ReadyPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
