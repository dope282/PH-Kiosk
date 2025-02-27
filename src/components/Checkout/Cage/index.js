import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ProductContext } from "../../Dashboard/Products/ProductContext/ProductContext";
import cage from "../../../assets/cage.jpg";
import box from "../../../assets/box.jpg";

const Cage = () => {
    const location = useLocation();
    const { totalPrice, setTotalPrice, bagCount, setBagCount, boxCount, setBoxCount } = useContext(ProductContext);
    const navigate = useNavigate();

    const BAG_PRICE = 200;
    const BOX_PRICE = 200;

    const updateBagCount = (change) => {
        if (change === -1 && bagCount === 0) return;
        setBagCount(bagCount + change);
        setTotalPrice(totalPrice + change * BAG_PRICE);
    };

    const updateBoxCount = (change) => {
        if (change === -1 && boxCount === 0) return;
        setBoxCount(boxCount + change);
        setTotalPrice(totalPrice + change * BOX_PRICE);
    };

    // const totalPrice = location.state?.totalPrice || 0;

    return (
        <div className="flex justify-center items-center w-screen h-screen text-base md:text-lg lg:text-4xl">
            <div className="bg-gray-200 flex flex-col justify-between w-11/12 h-2/3 rounded-xl border-gray-500 border-2">
            <div className="flex justify-end cursor-pointer p-6" onClick={() => {
                setBagCount(0); 
                setBoxCount(0); 
                setTotalPrice(0); 
                navigate(-1);
            }}>
                ⨉
                </div>
            <div className="lg:flex lg:flex-col lg:h-2/3">
                <div className="h-1/3 lg:h-1/2 flex justify-center items-center lg:w-full lg:border-b-2 lg:border-gray-300">
                    <div className="h-32 w-32 bg-white lg:h-64 lg:w-64 ">
                        <img src={cage} alt="Cage" />
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <span className="inline-block lg:font-semibold lg:p-4">Тор: {BAG_PRICE}₮</span>
                        <span className="block lg:p-4 lg:pb-8">Хэмжээ: 40см*60см</span>
                        <div className="flex gap-4 mt-2 ">
                            <button 
                                onClick={() => updateBagCount(-1)} 
                                className={`px-3 py-1 rounded-md ${bagCount === 0 ? "bg-gray-300 cursor-not-allowed " : "bg-gray-300 text-white"} `}
                                disabled={bagCount === 0}
                                >
                                -
                            </button>
                            <span>{bagCount}</span>
                            <button 
                                onClick={() => updateBagCount(1)} 
                                className="bg-primary text-white px-3 py-1 rounded-md"
                                >
                                +
                            </button>
                        </div>
                    </div>
                </div>

                <div className="h-1/3 lg:h-1/2 flex justify-center items-center lg:w-full lg:border-gray-300">
                    <div className="h-32 w-32 bg-gray-300 flex justify-center items-center lg:h-64 lg:w-64 ">
                        <img src={box} alt="Box" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="inline-block lg:font-semibold lg:p-4">Хайрцаг: {BOX_PRICE}₮</span>
                        <span className="block lg:p-4 lg:pb-8">Хэмжээ: 80см*80см</span>
                        <div className="flex gap-4 mt-2">
                            <button 
                                onClick={() => updateBoxCount(-1)} 
                                className={`px-3 py-1 rounded-md ${boxCount === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-300 text-white"}`}
                                disabled={boxCount === 0}
                                >
                                -
                            </button>
                            <span>{boxCount}</span>
                            <button 
                                onClick={() => updateBoxCount(1)} 
                                className="bg-primary text-white px-3 py-1 rounded-md"
                                >
                                +
                            </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center my-4">
                    <p className="text-lg font-semibold">Нийт төлбөр: {totalPrice.toLocaleString()}₮</p>
                </div>

                <div className="flex justify-center mb-7 lg:text-5xl lg:p-8">
                    <button onClick={() => navigate("/cage/checkout")} className="bg-primary text-white py-2 px-8 rounded-lg lg:p-6 lg:px-16 lg:rounded-2xl">
                        Үргэлжлүүлэх
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cage;
