import React from "react";
import { useState } from "react";
import NumericKeypad from "../NumKeyPad";
function PasswordRecovery ({ onClose })  {
    const [phone, setPhone] = useState("");
     const [activeField, setActiveField] = useState(null);
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
            onClose(true);
        } else {
          // Alert();
          alert("Бүртгэлгүй утасны дугаар байна");
        }
      };
  
  return (
    <div className="fixed h-screen w-screen z-40 bottom-0 left-0 translate-x-0 bg-white flex justify-center items-center">
      <form onSubmit={handleSubmit} className="modal-content">
        <span className="cursor-pointer" onClick={onClose}>X</span>
        <h2 className="cursor-default">ПИН КОД СЭРГЭЭХ</h2>

        <label className="block">УТАСНЫ ДУГААР:</label>
        <input type="text"  value={phone}  onFocus={() => setActiveField("phone")}   readOnly placeholder="Утасны дугаар оруулна уу"  />

        <button className="w-full text-white bg-teal-600 rounded-lg h-10 hover:bg-teal-700">Нууц үг сэргээх</button>
      </form>
      {activeField && (
                <NumericKeypad onInput={handleInput} onBackspace={handleBackspace} onSubmit={() => setActiveField(null)} />
              )}
    </div>
    
  );
};

export default PasswordRecovery;
