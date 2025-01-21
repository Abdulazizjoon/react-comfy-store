import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const [data, setData] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products`)
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
            <li className="text-sm px-4 py-2 text-[#394E6A] ml-1 hover:bg-gray-400 cursor-pointer rounded-lg">
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
              className="text-sm px-4 py-2 text-[#c7c9d1] ml-1 cursor-pointer bg-[#021431] rounded-xl"
            >
              Products
            </li>
            <li className="text-sm px-4 py-2 text-[#394E6A] ml-1 cursor-pointer hover:bg-gray-400 rounded-xl">
              Cart
            </li>
          </ul>
          <div className="text-center mt-1">
            <i className="fa-solid fa-moon text-lg cursor-pointer"></i>
            <i className="fa-solid fa-cart-shopping text-lg ml-4 cursor-pointer"></i>
          </div>
        </div>
      </nav>
          <section>
              
     </section>
      <div className="flex flex-wrap mx-auto gap-4 w-[1200px] justify-center">
        {data.map((value, index) => (
          <div key={index} className="bg-white rounded-lg p-3 shadow-lg  w-80">
            <img
              src={value.attributes.image}
              alt={value.attributes.tit}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {value.attributes.title}
              </h2>
              <p className="text-blue-500 text-xl mt-2">
                ${value.attributes.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
