import React, { useState } from "react";
import NumericKeypad from "./NumKeyPad";
import logo from "../../assets/logo.png";
import PasswordRecovery from "./PasswordRecovery";
import DashboardModal from "../Dashboard/DashboardModal";

function Login({ onLogin }) {
    const [phone, setPhone] = useState("");
    const [pin, setPin] = useState("");
    const [activeField, setActiveField] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showDashboardModal, setShowDashboardModal] = useState(false);
    const [error, setError] = useState({ phone: false, pin: false });

    const handleInput = (value) => {
        if (activeField === "phone" && phone.length < 8) {
            setPhone(phone + value);
        } else if (activeField === "pin" && pin.length < 4) {
            setPin(pin + value);
        }
    };

    const handleBackspace = () => {
        if (activeField === "phone") {
            setPhone(phone.slice(0, -1));
        } else if (activeField === "pin") {
            setPin(pin.slice(0, -1));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (phone === "99111111" && pin === "1111") {
            setShowDashboardModal(true);
            setError({ phone: false, pin: false });
        } else {
            setError({
                phone: phone !== "99111111",
                pin: pin !== "1111"
            });
        }
    };

    return (
        <div className="h-screen">
            <form onSubmit={handleSubmit} className="p-20 h-screen flex flex-col justify-between flex-wrap text-gray-900">
                <div className="flex justify-center items-center h-1/4">
                    <img className="h-1/2" src={logo} alt="PlayHouse Logo" />
                </div>
                <div className="flex flex-col h-1/2 mx-10">
                    <label className="block text-gray-700 text-base md:text-lg lg:text-5xl">УТАСНЫ ДУГААР:</label>
                    <input
                        type="text"
                        value={phone}
                        onFocus={() => setActiveField("phone")}
                        readOnly
                        className={`w-full text-base md:text-lg lg:text-5xl lg:font-light lg:p-6 lg:mt-8 lg:rounded-2xl px-4 py-2 mt-2 border rounded-lg focus:outline-primary lg:border-2 lg:border-gray-400  active:outline-primary ${
                            error.phone ? "border-red-500" : ""
                        }`}
                        placeholder="Утасны дугаар оруулна уу"
                    />
                    {error.phone && <p className="text-red-500 text-base md:text-lg lg:text-3xl lg: mt-4">Утасны дугаар буруу байна</p>}
                    
                    <label className="block text-gray-700 mt-4 text-base md:text-lg lg:text-5xl lg:mt-6">НУУЦ ҮГ:</label>
                    <input
                        type="password"
                        value={pin}
                        onFocus={() => setActiveField("pin")}
                        readOnly
                        className={`lg:border-2 lg:border-gray-400 w-full text-base md:text-lg lg:text-5xl lg:font-light lg:p-6 lg:mt-8 lg:rounded-2xl px-4 py-2 mt-2 border border-opacity-40 rounded-lg focus:outline-primary ${
                            error.pin ? "border-red-500" : ""
                        }`}
                        placeholder="Пин кодоо оруулна уу"
                    />
                    {error.pin && <p className="text-red-500 text-base md:text-lg lg:text-3xl lg: mt-4">Пин код буруу байна</p>}

                    <div className="lg:mt-8">
                        <a href="#" onClick={() => setIsModalOpen(true)} className="border-b-2 border-primary my-8 text-base md:text-lg lg:text-4xl text-gray-700 ">
                            ПИН КОД СЭРГЭЭХ
                        </a>
                    </div>
                </div>
                <div className="flex items-end">
                    <button type="submit" className="w-full font-normal py-2 xl:h-28 xl:text-4xl text-white bg-primary rounded-2xl hover:bg-primary-hover text-base md:text-lg lg:text-5xl lg:p-8">
                        Нэвтрэх
                    </button>
                </div>
            </form>
            {showDashboardModal && <DashboardModal onClose={() => setShowDashboardModal(false)} />}
            {activeField && <NumericKeypad onInput={handleInput} onBackspace={handleBackspace} onSubmit={() => setActiveField(null)} />}
            {isModalOpen && <PasswordRecovery onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}

export default Login;
