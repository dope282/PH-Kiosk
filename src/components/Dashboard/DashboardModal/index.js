import React from "react";
import { useNavigate } from "react-router-dom";
import OrderProduct from "../../../assets/OrderProduct.png";
import ReadyProduct from "../../../assets/ReadyProduct.png";
import background from "../../../assets/background.png";
const DashboardModal = ({onClose}) => {
    const navigate = useNavigate();
    
    const handleSelection = (type) => {
        navigate(`/${type}`);
        onClose();
    }
    return (
        <div className="fixed h-screen w-screen bottom-0 left-0 transform -translate-x-0 z-50 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}>
            <form className="w-3/4 flex flex-col justify-between items-center lg:h-1/2  ">
            <h2 className="flex justify-start items-start text-base md:text-lg lg:text-4xl lg:font-semibold text-gray-700 lg:fixed lg:top-32 lg:left-32">#ХОРООЛОЛ САЛБАР</h2>
            <img src={OrderProduct}
            onClick={() => handleSelection("order")}
            className="cursor-pointer w-1/2 rounded-md shadow-2xl lg:h-1/2 lg:w-auto lg:max-w-full lg:max-h-full"
            alt="ЗАХИАЛГЫН БАРАА"/>
            <br/>
            <img src={ReadyProduct}
            onClick={() => handleSelection("ready")}
            className="cursor-pointer w-1/2 rounded-md shadow-2xl lg:h-1/2 lg:w-auto lg:max-w-full lg:max-h-full"
            alt="БЭЛЭН БАРАА"/>
            </form>
        </div>
    )
}

export default DashboardModal;