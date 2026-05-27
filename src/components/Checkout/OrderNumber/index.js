import React from "react";
import { useNavigate } from "react-router-dom";
import details from "../../../assets/details.png";

const OrderNumber = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/"); 
    };

    return (
        <div className="flex justify-center items-center h-screen w-screen flex-col lg:text-5xl">
            <div className="h-2/3 w-11/12 bg-cover bg-center bg-no-repeat rounded-xl border-gray-300 border-2">
                <div className="flex justify-center lg:my-20">Таны өмнө 12 үйлчлүүлэгч байна</div>
                <div className="flex justify-center items-center text-primary-hover lg:text-9xl lg:font-bold">#278</div>
                <div className="flex justify-center">
                    <img className="" src={details} alt="" />
                </div>
                <div className="flex justify-center">
                    <button 
                        onClick={handleLogout}
                        className="bg-primary hover:bg-primary-hover text-white p-2 rounded border-2 w-1/3 lg:rounded-xl lg:w-3/4 lg:p-9 lg:my-10"
                    >
                        Системээс гарах
                    </button>
                </div>
                <div className="flex justify-center font-bold text-gray-600 lg:text-center lg:text-4xl lg:m-8">
                    Таны захиалга бэлэн болтол хүлээлгийн танхимд түр хүлээнэ үү
                </div>
            </div>
        </div>
    );
};

export default OrderNumber;
