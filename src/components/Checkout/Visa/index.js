import React, { useState, useEffect } from "react";
import background from "../../../assets/cartBackground.png";
import { useNavigate } from "react-router-dom";

const Visa = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [showError, setShowError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
        const handleError = () => {
            setError(true);
            setShowError(true);
        };
    
        const handleContinue = () => {
            setSuccess(true);
            setShowSuccess(true);
            setTimeout(() => {
                navigate("/cage/checkout/ordernumber");
            }, 2000);
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
    
        useEffect(() => {
            if (success) {
                const timer1 = setTimeout(() => setShowSuccess(false), 1500);
                const timer2 = setTimeout(() => setSuccess(false), 2500);
                return () => {
                    clearTimeout(timer1);
                    clearTimeout(timer2);
                };
            }
        }, [success]);
    return (
        <div className="flex justify-center items-center h-screen w-screen lg:text-5xl">
            <div 
                className="h-3/5 w-11/12 bg-cover bg-center bg-no-repeat rounded-xl border-gray-300 border-2"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="flex justify-end cursor-pointer p-6 lg:" onClick={() => navigate("/cage/checkout")}>
                ⨉
                </div>
                <div className="flex justify-center text-gray-700 text-xl mt-5 lg:text-5xl">
                    Банкны картаар төлбөрөө төлнө үү
                </div>
                
                <div className="flex justify-center mt-10 space-x-4">
                    <button 
                        onClick={handleContinue}
                        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover"
                    >
                        Үргэлжлүүлэх
                    </button>
                    <button 
                        onClick={handleError}
                        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                        Алдаа
                    </button>
                </div>
                {success && (
                    <div
                        className={`bg-green-500 text-white mt-4 fixed top-3 left-1/2 -translate-x-1/2 p-2 px-5 rounded-lg lg:w-3/4 lg:text-center ${
                            showSuccess ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
                        }`}
                    >
                        Амжилттай! Түр хүлээнэ үү...
                    </div>
                )}
                {error && (
                    <div className={`bg-red-400 text-white mt-4 fixed top-3 left-1/2 -translate-x-1/2 p-2 px-5 rounded-lg lg:w-3/4 lg:text-center ${
                        showError ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
                    }`}>
                        Төлбөрийн алдаа гарлаа! Дахин оролдоно уу.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Visa;
