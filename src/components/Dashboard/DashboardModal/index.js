import React from "react";
import { useNavigate } from "react-router-dom";
const DashboardModal = ({onClose}) => {
    const navigate = useNavigate();
    
    const handleSelection = (type) => {
        navigate(`/${type}`);
        onClose();
    }
    return (
        <div className="fixed h-screen w-screen bottom-0 left-0 transform -translate-x-0 z-50 flex items-center justify-center bg-white">
            <form className="w-3/4 flex flex-col justify-between">
            <h2 className="flex justify-start items-start">#ХОРООЛОЛ САЛБАР</h2>
            <button onClick={() => handleSelection("order/arrived")}>ЗАХИАЛГЫН БАРАА</button>
            <br/>
            <button onClick={() => handleSelection("ready/playhouse")}>БЭЛЭН БАРАА</button>
            </form>
        </div>
    )
}

export default DashboardModal;