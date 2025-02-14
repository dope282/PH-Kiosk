import React from "react";
// import css from "./style.module.css";
import { useNavigate } from "react-router-dom";
const Controll= (props) => {
    const navigate = useNavigate();
    
    return (
        <div className="fixed w-screen bottom-0 grid grid-cols-2">
            <p className="inline-block">Барааны тоо ширхэг: 4</p>
            <p className="inline-block">Нийт карго төлбөр: 20000₮</p>
            <button onClick={() => navigate("/")} className="bg-gray-300 hover:bg-gray-400 text-gray-600 p-2">Системээс гарах</button>
            <button className="bg-teal-600 hover:bg-teal-700 text-white p-2">Үргэлжлүүлэх</button>
        </div>
    );
};

export default Controll;