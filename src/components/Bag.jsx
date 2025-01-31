import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cart from "../store/cart";
import axios from "axios";
function bag() {
  let navigate = useNavigate();
  let cart = useSelector((state) => state.cart);
  let [data, setData] = useState([]);
  function about() {
    navigate("/about");
  }

  function product() {
    navigate("/products");
  }
  function home() {
    navigate("/");
  }
  console.log(cart.id);

  useEffect(function () {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products`)
      .finally((response) => {
        if (response.status === 200) {
          setData(response.data.data);
        }
      });
  }, []);
  return (
    <div>
      <header className="bg-blue-950 py-2 ">
        <div className="flex justify-center sm:justify-end w-[1200px] container mx-auto">
          <div className="flex gap-x-6 justify-center items-center text-white">
            <a className="link link-hover text-xs sm:text-sm">
              Sign in / Guest
            </a>
            <a className="link link-hover text-xs sm:text-sm">Create Account</a>
          </div>
        </div>
      </header>
      <nav className="bg-[#b4eaea]">
        <div className="flex text-center px-20 py-4 container mx-auto w-[1200px] justify-between">
          <h1 className="text-3xl">Logo</h1>
          <ul className="flex text-center mt-1">
            <li
              onClick={home}
              className="text-sm px-4 py-2 hover:bg-gray-400 text-[#394E6A] ml-1 cursor-pointer rounded-lg"
            >
              Home
            </li>
            <li
              onClick={about}
              className="text-sm px-4 py-2 text-[#394E6A] ml-1 cursor-pointer hover:bg-gray-400 rounded-xl"
            >
              About
            </li>
            <li
              onClick={product}
              className="text-sm px-4 py-2 text-[#394E6A] ml-1 cursor-pointer hover:bg-gray-400 rounded-xl"
            >
              Products
            </li>
            <li className="text-sm px-4 py-2 text-[#c7c9d1] ml-1 bg-[#021431] cursor-pointer  rounded-xl">
              Cart
            </li>
          </ul>
          <div className="text-center mt-1">
            <i className="fa-solid fa-moon text-lg cursor-pointer"></i>
            <i className="fa-solid fa-cart-shopping text-lg ml-4 cursor-pointer"></i>
          </div>
        </div>
      </nav>
      <div className="container mx-auto w-[1200px]">
        <h2 className="ml-14 mt-7 text-4xl">Shopping Cart</h2>
        <div className="w-full bg-black h-[1px] mt-3 mb-4"></div>
      </div>
      <div>
        {cart.length > 0 &&
          cart.map((value, index) => {
            return (
              <div key={index}>
                <p>{value[0].id}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default bag;
