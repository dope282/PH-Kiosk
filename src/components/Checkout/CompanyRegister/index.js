import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NumericKeypad from "../../Login/NumKeyPad";

const CompanyRegister = () => {
    const navigate = useNavigate();
    const [activeField, setActiveField] = useState(null);
    const [register, setRegister] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [error, setError] = useState(false); 
    const [showError, setShowError] = useState(false);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedPayment = queryParams.get("payment"); 


    const handleRegisterChange = (value) => {
        if (activeField === "register" && register.length < 7) {
            const newRegister = register + value; 
            setRegister(newRegister);

            if (newRegister === "5653649") {
                setCompanyName("Playhouse");
            } else {
                setCompanyName("Компаний нэр олдсонгүй");
            }
        }
    };

    const handleBackspace = () => {
        if (activeField === "register") {
            setRegister((prev) => prev.slice(0, -1)); 
        }
    };

    const handleSubmit = () => {
        if (!register || companyName === "Компаний нэр олдсонгүй") {
            setError(true);
            setShowError(true);
        } else {
            if (selectedPayment === "bank") {
                navigate("/cage/checkout/visa"); 
            } else if (selectedPayment === "qpay") {
                navigate("/cage/checkout/qpay"); 
            };
            setError(false);
            setShowError(false);
        }
    };

    useEffect(() => {
        if (error) {
            const timer1 = setTimeout(() => setShowError(false), 1000); 
            const timer2 = setTimeout(() => setError(false), 2000); 
            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
            };
        }
    }, [error]);

    return (
        <div className="flex justify-center items-center h-screen w-screen lg:text-5xl">
            <div className="bg-gray-200 h-3/5 w-11/12 rounded-xl border-gray-300 border-2 lg:justify-between lg:flex lg:flex-col">
                <div className="flex justify-end cursor-pointer p-6 lg:" onClick={() => navigate("/cage/checkout")}>
                ⨉
                </div>
                <div className="flex justify-center text-gray-800 lg:py-8">Компаний регистрээ оруулна уу</div>
                <div className="flex flex-col h-1/2 lg:px-8">
                    <label className="block text-gray-600 lg:py-6">Регистр:</label>
                    <input 
                        onFocus={() => setActiveField("register")} 
                        readOnly 
                        type="text" 
                        value={register}
                        className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-primary active:outline-primary lg:py-4 lg:rounded-2xl lg:font-light"
                        placeholder="Компаний регистрээ бичнэ үү"
                    />
                    <label className="block text-gray-600 lg:py-6 lg:pt-16">Компани:</label>
                    <input 
                        type="text"
                        value={companyName}
                        readOnly
                        placeholder="Компаний нэр" 
                        className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-primary active:outline-primary ${companyName ? "" : ""} lg:py-4 lg:rounded-2xl lg:font-light`} 
                        style={{ color: companyName === "Компаний нэр олдсонгүй" ? "#9ca3af" : "inherit" }} 
                    />
                </div>
                <div className="lg:flex justify-center">
                <button 
                    onClick={handleSubmit}
                    className="w-full font-normal py-2 xl:h-28 xl:text-4xl text-white bg-primary rounded-2xl hover:bg-primary-hover lg:py-8 lg:mb-10 lg:w-3/4" 
                    >
                    Үргэлжлүүлэх
                </button>
                    </div>
                {error && (
                    <div 
                        className={`bg-red-400 text-white mt-2 fixed top-3 left-1/2 -translate-x-1/2 cursor-pointer p-1 px-5 rounded-lg transition-all duration-500 ease-in-out ${showError ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"} lg:w-3/4 lg:p-7`}
                    >
                        {register ? "Компаний нэр олдсонгүй!" : "Компаний регистрийг оруулна уу!"}
                    </div>
                )}
                {activeField && (
                    <NumericKeypad onSubmit={() => setActiveField(null)} onInput={handleRegisterChange} onBackspace={handleBackspace} />
                )}
            </div>
        </div>
    );
};

export default CompanyRegister;
