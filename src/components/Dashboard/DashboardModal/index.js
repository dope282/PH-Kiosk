import React from "react";
import Menu from "../../Menu";
import { useNavigate } from "react-router-dom";
const DashboardModal = ({onClose}) => {
    const navigate = useNavigate();
    
    const handleSelection = (type) => {
        navigate(`/${type}`);
        onClose();
    }
    return (
        <div className="bg-cyan-200">
            <form>
            <h2>#ХОРООЛОЛ САЛБАР</h2>
            <button onClick={() => handleSelection("dashboard")}>ЗАХИАЛГЫН БАРАА</button>
            <br/>
            <button onClick={() => handleSelection("dashboard")}>БЭЛЭН БАРАА</button>
            <br/>
            <button onClick={() => handleSelection("dashboard")} > Үргэлжлүүлэх</button>
            </form>
        </div>
    )
}

export default DashboardModal;