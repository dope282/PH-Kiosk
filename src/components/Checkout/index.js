import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../Dashboard/Products/ProductContext/ProductContext";
import cart from "../../assets/cart.png";
import qpay from "../../assets/qpay.png";

const Checkout = () => {
    const { totalPrice } = useContext(ProductContext);
    const navigate = useNavigate();
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [selectedUserType] = useState(null);
    const [error, setError] = useState("");

    const handlePaymentSelection = (method) => {
        setSelectedPayment(method);
        setError(""); 
    };

    const handleUserTypeSelection = (type) => {
        if (!selectedPayment) {
            setError("Төлбөрийн аргаа сонгоно уу!"); 
        } else {
            if (type === "company") {
                navigate(`/cage/checkout/company-register?payment=${selectedPayment}`);
            } else if (type === "individual") {
                if (selectedPayment === "bank") {
                    navigate("/cage/checkout/visa");
                } else if (selectedPayment === "qpay") {
                    navigate("/cage/checkout/qpay");
                }
            }
        }
    };

    console.log("Total Cargo:", totalPrice);

    return (
        <div className="flex justify-center items-center w-screen h-screen lg:text-5xl">
            <div className="bg-gray-200 flex flex-col justify-between lg:justify-start w-11/12 h-2/3 rounded-xl border-gray-300 border-2">
                <div className="flex justify-end cursor-pointer p-6 lg:" onClick={() => navigate(-2)}>
                ⨉
                </div>
                <div className="flex justify-center text-gray-700 lg:my-6">ТӨЛБӨР БАТАЛГААЖУУЛАХ</div>
                <div className="flex justify-center text-gray-700 ">Нийт төлбөр:</div>
                <div className="flex justify-center text-primary font-bold lg:mb-11 lg:my-6">{totalPrice.toLocaleString()}₮</div>

                <div className="h-1/2 flex flex-col gap-4">
                    <div className={`cursor-pointer ${selectedPayment === "bank" ? "font-bold text-primary" : "text-gray-500"} flex h-1/2 justify-center`}>
                        <div className="w-5/6 flex justify-end bg-white rounded-lg m-2">
                            <img src={cart} className="h-full px-2" alt="" />
                            <span 
                                className={`w-full flex justify-center items-center lg:px-5 text-center`}
                                onClick={() => handlePaymentSelection("bank")}
                            >
                                Банкны картаар төлбөр төлөх
                            </span>
                        </div>
                    </div>
                    <div className={`cursor-pointer ${selectedPayment === "qpay" ? "font-bold text-primary" : "text-gray-500"} flex h-1/2 justify-center`}>
                        <div className="w-5/6 flex justify-end bg-white rounded-lg m-2">
                            <img src={qpay} className="h-full px-2" alt="" />
                            <span 
                                className={`w-full flex justify-center items-center lg:px-5 text-center`}
                                onClick={() => handlePaymentSelection("qpay")}
                            >
                                Q-Pay төлбөр төлөх
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-4 lg:mt-16">
                    <button 
                        className={`bg-white text-gray-800 border-2 border-gray-300 py-1 px-9 rounded-lg ${selectedUserType === "company" ? "font-bold" : ""} lg:p-6 lg:px-12`}
                        onClick={() => handleUserTypeSelection("company")}
                    >
                        Байгууллага
                    </button>
                    <button 
                        className={`bg-primary text-white py-2 px-8 rounded-lg ${selectedUserType === "individual" ? "font-bold" : ""} lg:px-24`}
                        onClick={() => handleUserTypeSelection("individual")}
                    >
                        Хувь хүн
                    </button>
                </div>
                <div className="mb-4 flex justify-center text-gray-600 font-semibold lg:text-4xl lg:h-full lg:items-center">72 цагийн дотор И-баримт автоматаар бүртгэгдэнэ</div>

                {error && (
                    <div className="bg-red-400 text-white text-center p-2 rounded-lg fixed top-3 left-1/2 -translate-x-1/2 cursor-default lg:w-3/4 lg:p-6">
                        {error} 
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;
