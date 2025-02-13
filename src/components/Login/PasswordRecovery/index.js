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
    <div className="modal-overlay">
      <form onSubmit={handleSubmit} className="modal-content">
        <span className="close" onClick={onClose}>X</span>
        <h2>ПИН КОД СЭРГЭЭХ</h2>

        <label>УТАСНЫ ДУГААР:</label>
        <input type="text"  value={phone}  onFocus={() => setActiveField("phone")}   readOnly placeholder="Утасны дугаар оруулна уу"  />

        <button className="submit">Нууц үг сэргээх</button>
      </form>
      {activeField && (
                <NumericKeypad onInput={handleInput} onBackspace={handleBackspace} onSubmit={() => setActiveField(null)} />
              )}
    </div>
    
  );
};

export default PasswordRecovery;
