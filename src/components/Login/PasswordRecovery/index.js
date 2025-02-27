import React, { useState, useEffect } from "react";
import NumericKeypad from "../NumKeyPad";

function PasswordRecovery({ onClose }) {
    const [phone, setPhone] = useState("");
    const [activeField, setActiveField] = useState(null);
    const [error, setError] = useState(false); 
    const [showError, setShowError] = useState(false);

    const handleInput = (value) => {
        if (activeField === "phone" && phone.length < 8) {
            setPhone(phone + value);
        }
    };

    const handleBackspace = () => {
        if (activeField === "phone") {
            setPhone(phone.slice(0, -1));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (phone === "99111111") {
            setError(false);
            setShowError(false);
            onClose(true);
        } else {
            setError(true);
            setShowError(true); 
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
        <div className="fixed h-screen w-screen z-40 bottom-0 left-0 translate-x-0 bg-white flex justify-center items-center lg:text-5xl">
            <form onSubmit={handleSubmit} className="modal-content lg:w-3/4 bg-gray-200 h-3/5 lg:rounded-xl lg:border-2 lg:border-gray-500 lg:flex lg:flex-col lg:justify-start">
                <span className="cursor-pointer text-gray-600 lg:flex lg:p-10 lg:justify-end hover:text-black" onClick={onClose}>⨉</span>
                <h2 className="cursor-default text-lg mb-4 lg:text-5xl lg:flex lg:justify-center lg:my-28 lg:text-gray-800">ПИН КОД СЭРГЭЭХ</h2>

                <label className="block text-gray-700 lg:m-10">УТАСНЫ ДУГААР:</label>

                <div className="lg:flex lg:justify-center lg:rounded-xl">
                <input
                    type="text"
                    value={phone}
                    onFocus={() => setActiveField("phone")}
                    readOnly
                    className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-primary ${error ? "border-red-500" : ""} lg:mx-10 lg:font-light lg:p-6 lg:border-2 lg:border-gray-400`}
                    placeholder="Утасны дугаар оруулна уу"
                    />
                </div>
                {error && (
                    <div 
                        className={`bg-red-400 text-white mt-2 fixed top-3 left-1/2 -translate-x-1/2 cursor-pointer p-1 px-5 rounded-lg transition-all duration-500 ease-in-out ${
                            showError ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
                        } lg:w-3/4 lg:text-center` }
                    >
                        ❌ Бүртгэлгүй утасны дугаар байна
                    </div>
                )}
                <div className="lg:flex lg:h-full lg:items-end lg:mb-6 lg:justify-center">
                <button className="w-full text-white bg-primary rounded-lg h-10 hover:bg-primary-hover lg:p-6 lg:rounded-xl lg:h-1/4 lg:w-3/4">
                    Нууц үг сэргээх
                </button>
            </div>
            </form>

            {activeField && (
                <NumericKeypad onInput={handleInput} onBackspace={handleBackspace} onSubmit={() => setActiveField(null)} />
            )}
        </div>
    );
}

export default PasswordRecovery;
