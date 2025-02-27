import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../Products/ProductContext/ProductContext";

const Controll = () => {
    const navigate = useNavigate();
    const { totalQuantity, totalPrice } = useContext(ProductContext);
    const [error, setError] = useState(false);
    const [showError, setShowError] = useState(false);
    
    const handleContinue = () => {
        if (totalPrice <= 0) {
            setError(true);
            setShowError(true);
        } else {
            navigate("/cage");
            setError(false);
            setShowError(false);
        }
    };

    useEffect(() => {
        if (error) {
            const timer1 = setTimeout(() => setShowError(false), 1500);
            const timer2 = setTimeout(() => setError(false), 2500);
            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
            };
        }
    }, [error]);

    return (
        <div className="fixed w-screen bottom-0 bg-white shadow-lg p-4 grid grid-cols-2 items-center text-base md:text-lg lg:text-5xl lg:h-1/5 lg:rounded-t-3xl lg:border-4">
            <p className="text-gray-700 lg:flex lg:flex-col lg:border-r-4 lg:pl-6">Барааны тоо ширхэг: <span className="font-bold lg:flex lg:justify-center lg:pt-6">{totalQuantity}</span></p>
            <p className="flex">
                <p className="text-gray-700 lg:flex lg:flex-col lg:pl-6">Нийт карго төлбөр: <span className="font-bold lg:flex lg:justify-center lg:pt-6">{totalPrice.toLocaleString()}₮</span></p>
            </p>
            <button onClick={() => navigate("/")} className="bg-gray-200 border-2 border-gray-400 hover:bg-gray-400 text-gray-600 p-2 rounded lg:rounded-lg lg:p-6 lg:mr-3">
                Системээс гарах
            </button>
            <button onClick={handleContinue} className="bg-primary hover:bg-primary-hover text-white p-2 rounded lg:rounded-lg lg:p-6 lg:ml-3">
                Үргэлжлүүлэх
            </button>
            {error && (
                <div 
                    className={`bg-red-400 text-white mt-2 fixed top-3 left-1/2 -translate-x-1/2 cursor-pointer p-1 px-5 rounded-lg transition-all duration-500 ease-in-out ${showError ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"} lg:w-5/6 lg:flex lg:justify-center lg:text-4xl lg:py-2`}
                >
                    ❌ Та ямар нэгэн бараа сонгоогүй байна.
                </div>
            )}
        </div>
    );
};

export default Controll;
