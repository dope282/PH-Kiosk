import React from "react";
// import css from "./style.module.css";
import { useNavigate } from "react-router-dom";
const Controll= (props) => {
    const navigate = useNavigate();
    
    return (
        <div>
            <p>Барааны тоо ширхэг:</p>
            <p>Нийт карго төлбөр: ₮</p>
            <button onClick={() => navigate("/")} className="bg-red-500 text-white p-2">Системээс гарах</button>
            <button>Үргэлжлүүлэх</button>
        </div>
    );
};

export default Controll;