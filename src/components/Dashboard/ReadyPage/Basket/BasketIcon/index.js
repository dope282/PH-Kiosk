import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../BasketContext";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
const BasketIcon = () => {
    const navigate = useNavigate();
    const { cartCount } = useCart();
    return(
        <div className="fixed right-2 cursor-pointer lg:top-10 lg:right-12" onClick={() => navigate("/ready/basket")}>
            <button className="lg:flex lg:justify-center lg:items-center lg:flex-col lg:text-primary lg:tracking-tighter lg:font-semibold lg:text-xl">
            Таны санс
            <svg xmlns="http://www.w3.org/2000/svg" fill="#138EB0" viewBox="0 0 80 70" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:w-full lg:h-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M76.6092 22.5854H60.0125L50.7025 1.39787C50.1845 0.219014 48.803 -0.319708 47.6167 0.195409C46.4305 0.710215 45.8887 2.0835 46.4069 3.2625L54.8975 22.5855H25.1025L33.5931 3.2625C34.1111 2.0835 33.5695 0.71037 32.3833 0.195409C31.1972 -0.319708 29.8153 0.218703 29.2975 1.39787L19.9875 22.5854H3.39085C1.21976 22.5854 -0.391482 24.5388 0.0835169 26.5951L8.82334 64.4298C9.17037 65.9322 10.5444 67 12.1307 67H67.8693C69.4556 67 70.8296 65.9322 71.1767 64.4298L79.9165 26.5951C80.3915 24.539 78.7801 22.5854 76.6092 22.5854ZM20.4285 29.7296C20.1154 29.7296 19.7971 29.6669 19.4916 29.5342C18.3054 29.0194 17.7636 27.6463 18.2818 26.4671L20.0424 22.4602H25.1574L22.5774 28.3316C22.1928 29.2073 21.3319 29.7296 20.4285 29.7296ZM28.2813 54.5763C28.2813 55.8628 27.2319 56.9058 25.9375 56.9058C24.6432 56.9058 23.5938 55.8628 23.5938 54.5763V37.4938C23.5938 36.2073 24.6432 35.1643 25.9375 35.1643C27.2319 35.1643 28.2813 36.2073 28.2813 37.4938V54.5763ZM42.3438 54.5763C42.3438 55.8628 41.2944 56.9058 40 56.9058C38.7056 56.9058 37.6563 55.8628 37.6563 54.5763V37.4938C37.6563 36.2073 38.7056 35.1643 40 35.1643C41.2944 35.1643 42.3438 36.2073 42.3438 37.4938V54.5763ZM56.4062 54.5763C56.4062 55.8628 55.3568 56.9058 54.0625 56.9058C52.7681 56.9058 51.7187 55.8628 51.7187 54.5763V37.4938C51.7187 36.2073 52.7681 35.1643 54.0625 35.1643C55.3568 35.1643 56.4062 36.2073 56.4062 37.4938V54.5763ZM60.5082 29.5342C60.2029 29.6669 59.8847 29.7296 59.5715 29.7296C58.6681 29.7296 57.8072 29.2075 57.4225 28.3318L54.8425 22.4603H59.9575L61.7181 26.4673C62.2362 27.6463 61.6945 29.0194 60.5082 29.5342Z"/>
            </svg>

            {cartCount > 0 && (
                <span className="absolute top-1/3 -left-6 bg-rose-600 text-white text-xs px-3 py-2 rounded-full lg:font-bold lg:text-lg">
            +{cartCount}
            </span>
            )}
            </button>
      </div>
    )
}
export default BasketIcon;