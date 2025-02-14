import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from "react-router-dom";
import Login from '../Login';
import ReadyPage from "../Dashboard/ReadyPage";
import OrdersPage from '../Dashboard/OrdersPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/order" element={<OrdersPage/>} />
        <Route path="/ready" element={<ReadyPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
