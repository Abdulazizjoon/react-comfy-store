import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

function Cart() {
  const [data, setData] = useState([]);
    const navigate = useNavigate();
    let id=useParams().id
  useEffect(() => {
    axios
        .get(`https://react-vite-comfy-store-v2.netlify.app/products/${id}`)
        
      .then((response) => {
        if (response.status === 200) {
          console.log("API response:", response.data.data);
          setData(response.data.data);
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  function about() {
    navigate("/about");
  }

  function product() {
    navigate("/products");
  }
  function click(id) {
    localStorage.setItem("id", id);
  }
  function home() {
    navigate("/");
  }
  function cart() {
    navigate("/cart");
  }
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
              className="text-sm px-4 py-2 text-[#394E6A] ml-1 hover:bg-gray-400 cursor-pointer rounded-lg"
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
              className="text-sm px-4 py-2 text-[#394E6A] hover:bg-gray-400 ml-1 cursor-pointer rounded-xl"
            >
              Products
            </li>
            <li
              onClick={cart}
              className="text-sm px-4 py-2 bg-[#021431] text-[#c7c9d1] ml-1 cursor-pointer hover:bg-gray-400 rounded-xl"
            >
              Cart
            </li>
          </ul>
          <div className="text-center mt-1">
            <i className="fa-solid fa-moon text-lg cursor-pointer"></i>
            <i className="fa-solid fa-cart-shopping text-lg ml-4 cursor-pointer"></i>
          </div>
        </div>
      </nav>
      
          <div>
              {}
      </div>
    </div>
  );
}

export default Cart;
