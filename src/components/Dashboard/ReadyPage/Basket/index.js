import React, { useEffect, useState } from "react";
import { useCart } from "../Basket/BasketContext";
import BasketIcon from "./BasketIcon";
import ReadyOrdered from "../../Toolbar";
import { useNavigate } from "react-router-dom";
import background from "../../../../assets/background.png";
import QuantitySelector from "../HandleQuantityChange"; 

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(cart.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = cart.slice(startIndex, startIndex + itemsPerPage);

  const handleContinue = () => {
    if (totalPrice <= 0) {
      setError(true);
      setShowError(true);
    } else {
      navigate("/cage", { state: { totalPrice } });
      setError(false);
      setShowError(false);
    }
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
    console.log("Сагсны шинэ мэдээлэл:", cart);
  }, [cart]);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div style={{ backgroundImage: `url(${background})` }} className="bg-cover bg-center w-screen h-screen lg:text-4xl">
      <BasketIcon />
      <ReadyOrdered />
      <div className="bg-gray-200 h-full lg:flex lg:flex-col lg:mt-20 lg:h-5/6">
        <div className="lg:justify-center lg:flex text-red-700">
          <p className="lg:w-3/4 lg:bg-white lg:text-center lg:m-12 lg:py-4 lg:px-10 lg:rounded-3xl">
            Төлбөр төлөгдсөний дараа таны худалдан авалт баталгаажихыг анхаарна уу!
          </p>
        </div>

        {cart.length > 0 ? (
          <>
            <ul className="lg:h-2/4 lg:flex lg:flex-col lg:gap-6 lg:mx-20">
              {paginatedProducts.map((item, index) => (
                <li key={index} className="flex justify-between gap-4 border p-4 bg-white lg:h-1/3 lg:rounded-2xl lg:border-4 lg:border-gray-300">
                  <img className="lg:h-full lg:object-cover lg:mr-4" src={item.img} alt={item.name} />
                  <div className="lg:flex lg:flex-col lg:h-full lg:w-full">
                    <p className="lg:text-gray-700 lg:h-1/2 lg:flex lg:items-center">{item.name}</p>
                    <p className="lg:text-gray-900 lg:h-1/2 lg:flex lg:items-center lg:font-semibold lg:justify-between">
                      {item.price.toLocaleString()}₮
                    <QuantitySelector
                      quantity={item.quantity}
                      onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                      onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                      maxQuantity={item.maxQuantity} // Assuming you have maxQuantity in your item
                    />
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 px-2 py-1 text-gray-500 lg:flex"
                  >
                    ⨉
                  </button>
                </li>
              ))}
            </ul>

            <div className="fixed w-screen bottom-0 bg-white shadow-lg p-4 grid grid-cols-2 items-center text-base md:text-lg lg:text-5xl lg:h-1/5 lg:rounded-t-3xl lg:border-4">
              <p className="text-gray-700 lg:flex lg:flex-col lg:border-r-4 lg:pl-6">
                Барааны тоо ширхэг:
                <span className="font-bold lg:flex lg:justify-center lg:pt-6">{totalQuantity}</span>
              </p>
              <p className="text-gray-700 lg:flex lg:flex-col lg:pl-6">
                Нийт үнэ:
                <span className="font-bold lg:flex lg:justify-center lg:pt-6">{totalPrice.toLocaleString()}₮</span>
              </p>

              <button
                onClick={handleClearCart}
                className="bg-gray-200 border-2 border-gray-400 hover:bg-gray-400 text-gray-600 p-2 rounded lg:rounded-lg lg:p-6 lg:mr-3"
              >
                Цуцлах
              </button>
              <button
                onClick={handleContinue}
                className="bg-primary hover:bg-primary-hover text-white p-2 rounded lg:rounded-lg lg:p-6 lg:ml-3"
              >
                Төлбөр төлөх
              </button>
            </div>

            <div className="flex justify-center mt-4 space-x-7 lg:fixed lg:left-1/2 lg:-translate-x-1/2 lg:bottom-1/4">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-full ${currentPage === index + 1 ? "bg-primary text-white" : "bg-white"}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-500 flex items-center justify-center lg:text-3xl">Жагсаалт хоосон байна</p>
        )}
      </div>

      {error && (
        <div
          className={`bg-red-400 text-white mt-2 fixed top-3 left-1/2 -translate-x-1/2 cursor-pointer p-1 px-5 rounded-lg transition-all duration-500 ease-in-out ${
            showError ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          } lg:w-5/6 lg:flex lg:justify-center lg:text-4xl lg:py-2`}
        >
          ❌ Сагсанд ямар нэгэн бараа байхгүй байна.
        </div>
      )}
    </div>
  );
};

export default Cart;
