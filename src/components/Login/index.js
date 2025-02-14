import React from "react";
import { useState } from "react";
import NumericKeypad from "./NumKeyPad";
import logo from "../../assets/logo.png";
import PasswordRecovery from "./PasswordRecovery";
import DashboardModal from "../Dashboard/DashboardModal";
function Login({ onLogin }) {
    const [phone, setPhone] = useState("");
    const [pin, setPin] = useState("");
    const [activeField, setActiveField] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showDashbaordModal, setShowDashboardModal ] = useState(false);

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
      if (phone === "99111111" && pin === "1234") {
        setShowDashboardModal(true);
        // onLogin(true);
      } else {
        // Alert();
        alert("Таны пин код буруу байна");
      }
    };

  
    return (
      <div className="h-screen">
        <form onSubmit={handleSubmit} className="p-20 h-screen flex flex-col justify-between flex-wrap text-gray-900">
          <div className="flex justify-center items-center h-1/4">
            <img className="h-1/2"src={logo} alt="PlayHouse Logo" />
          </div>
          <div className="flex flex-col h-1/2 mx-10">
          <label className="block text-gray-700">УТАСНЫ ДУГААР:</label>
          <input 
            type="text" 
            value={phone} 
            onFocus={() => setActiveField("phone")} 
            readOnly 
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-teal-200 active:outline-teal-200"
            placeholder="Утасны дугаар оруулна уу" 
            />
          <label className="block text-gray-700">НУУЦ ҮГ:</label>
          <input 
            type="password" 
            value={pin} 
            onFocus={() => setActiveField("pin")} 
            readOnly 
            className="w-full px-4 py-2 mt-2 border border-opacity-40 rounded-lg focus:outline-teal-200"
            placeholder="Пин кодоо оруулна уу" 
            />
            <div>
              <a href="#" onClick={() => setIsModalOpen(true)} className="text-sm border-b-2   border-teal-700 my-8">ПИН КОД СЭРГЭЭХ</a>
            </div>
          </div>
          <div className="flex items-end">
              <button type="submit" className="w-full font-normal py-2 xl:h-28 xl:text-4xl xl text-white bg-teal-600 rounded-2xl hover:bg-teal-700">Нэвтрэх</button>
          </div>
          
        </form>
        {showDashbaordModal && <DashboardModal onClose={() => setShowDashboardModal(false)}/>}
        {activeField && (
          <NumericKeypad onInput={handleInput} onBackspace={handleBackspace} onSubmit={() => setActiveField(null)} />
        )}
        {isModalOpen && <PasswordRecovery onClose={() => setIsModalOpen(false)} />}
      </div>
    );
  }

  export default Login;