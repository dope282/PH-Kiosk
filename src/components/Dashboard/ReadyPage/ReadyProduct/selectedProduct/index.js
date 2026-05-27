import React, { useEffect, useState, useRef,useContext } from "react";
import { useCart } from "../../Basket/BasketContext";
import QuantitySelector from "../../HandleQuantityChange"; 
import { ProductContext } from "../../../Products/ProductContext/ProductContext";
const SelectedProduct = ({ product, onClose, otherProducts = [] }) => {
  const [selectedProduct, setSelectedProduct] = useState(product || otherProducts[0] || null);
  const [otherProductList, setOtherProductList] = useState(
    otherProducts.filter(p => p.id !== (product?.id || otherProducts[0]?.id))
  );
  const { totalPrice, setTotalPrice } = useContext(ProductContext); 
  const [quantity, setQuantity] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(otherProductList.length / itemsPerPage);
  const { addToCart, cart } = useCart();

  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    console.log("📢 Сагсны шинэ мэдээлэл:", cart);
  }, [cart]);
  useEffect(() => {
    if (selectedProduct) {
      setTotalPrice(selectedProduct.price * quantity);
    }
  }, [selectedProduct, quantity, setTotalPrice]);
  
  useEffect(() => {
    if (product) {
      setSelectedProduct(product);
      setOtherProductList(otherProducts.filter(p => p.id !== product.id));
      setQuantity(1);
    } else if (otherProducts.length > 0) {
      setSelectedProduct(otherProducts[0]);
      setOtherProductList(otherProducts.slice(1));
      setQuantity(1);
    } else {
      setSelectedProduct(null);
      setOtherProductList([]);
      setQuantity(1);
    }
  }, [product, otherProducts]);

  const handleQuantityChange = (type) => {
    if (type === "increase" && selectedProduct.quantity > quantity) {
      setQuantity(quantity + 1);
      setTotalPrice(selectedProduct.price * quantity); 
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(selectedProduct.price * quantity); 
    }
  };

  const paginatedProducts = otherProductList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleMouseDown = (e) => {
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!startX.current) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    startX.current = null;
    containerRef.current.style.cursor = "grab";
  };

  const handleProductSelect = (newProduct) => {
    setSelectedProduct(newProduct);
    setOtherProductList((prevList) => {
      return prevList
        .filter((item) => item.id !== newProduct.id)
        .concat(selectedProduct ? [selectedProduct] : []);
    });
    setQuantity(1);
};
const handleAddToCart = () => {
  if (quantity <= selectedProduct.quantity) {
    const productToAdd = {
      ...selectedProduct,
      selectedColor: selectedProduct.color,
      selectedCode: selectedProduct.code,
    };
    addToCart(productToAdd, quantity);

    setTotalPrice((prevTotal) => prevTotal + selectedProduct.price * quantity);

    setSelectedProduct((prevProduct) => {
      if (!prevProduct) return null;
      return {
        ...prevProduct,
        quantity: prevProduct.quantity - quantity,
      };
    });

    console.log("Сагсны мэдээлэл:", cart);
  } else {
    console.log("Not enough stock available.");
  }
};



  const handleColorChange = (e) => {
    setSelectedProduct((prevProduct) => ({
      ...prevProduct,
      color: e.target.value,
    }));
  };

  const handleCodeChange = (e) => {
    setSelectedProduct((prevProduct) => ({
      ...prevProduct,
      code: e.target.value,
    }));
  };

  if (!selectedProduct) return <div className="text-center text-gray-600">Бараа олдсонгүй.</div>;

  return (
    <div className="bg-white p-6 rounded shadow-lg w-full flex relative lg:p-10 lg:h-full lg:py-16">
      <div className="w-3/4 lg:flex lg:gap-1 lg:flex-col">
        {selectedProduct.img && <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full flex-wrap object-cover shadow-md" />}
        <div className="lg:flex lg:justify-between">
          <p className="w-1/2 text-primary text-xl lg:text-5xl lg:font-bold lg:my-6">{selectedProduct.price.toLocaleString()}₮</p>
          <QuantitySelector
            quantity={quantity}
            onIncrease={() => handleQuantityChange("increase")}
            onDecrease={() => handleQuantityChange("decrease")}
            maxQuantity={selectedProduct.quantity}
            />
        </div>
        <h2 className="text-lg w-1/2 text-gray-600 lg:text-4xl">{selectedProduct.name}</h2>
        <p className="mt-2 text-sm text-gray-500 lg:text-xl lg:h-full">{selectedProduct.description || "Дэлгэрэнгүй мэдээлэл байхгүй."}</p>

        <div className="mt-4">
          {selectedProduct.color && selectedProduct.color.length > 0 ? (
            <div className="mt-2">
              <label>Өнгө:</label>
              <select
                value={selectedProduct.color || ""}
                onChange={handleColorChange}
                className="border p-1"
              >
                <option value="">Сонгох</option>
                {selectedProduct.color.map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
          ) : (
            <p className="mt-2 text-gray-500">Өнгө сонгох боломжгүй.</p>
          )}
          {Array.isArray(selectedProduct.code) && selectedProduct.code.length > 0 ? (
            <div className="mt-2">
              <label>Код:</label>
              <select
                value={selectedProduct.code || ""}
                onChange={handleCodeChange}
                className="border p-1"
              >
                <option value="">Сонгох</option>
                {selectedProduct.code.map((code) => (
                  <option key={code} value={code}>{code}</option>
                ))}
              </select>
            </div>
          ) : (
            <p className="mt-2 text-gray-500">Код сонгох боломжгүй.</p>
          )}
        </div>

        <p className="lg:flex lg:justify-between">
          <p>Үлдэгдэл: </p>
          <p className="lg:px-10">{selectedProduct.quantity}</p>
        </p>
      </div>

      <div className="w-1/3 flex flex-col lg:pl-8">
        <div
          ref={containerRef}
          className="flex flex-col gap-2 cursor-grab overflow-hidden lg:h-full"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((otherProduct) => (
              <div
                key={otherProduct.id}
                className="p-2 bg-white rounded cursor-pointer hover:bg-gray-200 transition lg:flex lg:flex-col lg:flex-wrap lg:object-cover lg:h-1/3 lg:shadow-lg lg:border-4"
                onClick={() => handleProductSelect(otherProduct)}
              >
                <img src={otherProduct.img} alt={otherProduct.name} className="w-full h-24 object-cover lg:h-4/6 lg:p-2 lg:shadow-lg" />
                <p className="lg:text-xl lg:text-gray-800 lg:h-1/6 lg:flex lg:items-center">{otherProduct.name}</p>
                {otherProduct.price && <p className="text-gray-700 font-semibold lg:h-1/6 lg:flex lg:items-center">{otherProduct.price.toLocaleString()}₮</p>}
              </div>
            ))
          ) : (
            <p className="text-gray-500">Жагсаалт хоосон байна</p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-around mt-2">
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1}
              className= {`px-4 py-1 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-primary text-white"}`}>
              &lt;
            </button>
            <button 
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={currentPage === totalPages}
              className={`px-4 py-1 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-primary text-white"}`}
            >
              &gt;
            </button>
          </div>
        )}
      </div>
      <div className="lg:fixed lg:left-0 lg:w-full bottom-0 lg:h-36 lg:flex lg:justify-between lg:my-4 lg:p-6 lg:text-4xl lg:gap-6 z-50">
        <button className="bg-white text-primary px-4 py-2 rounded lg:rounded-xl lg:border-2 lg:border-gray-400 lg:font-semibold lg:w-3/5">
          Нийт төлбөр: {totalPrice.toLocaleString()}₮
        </button>
        <button 
        onClick={handleAddToCart}
        className="bg-primary text-white px-4 py-2 rounded lg:px-12 lg:rounded-xl lg:w-2/5"
        >
        Сагслах
      </button>
        </div>
    </div>
  );
};

export default SelectedProduct; 