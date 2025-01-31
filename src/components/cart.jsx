import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { useDispatch } from "react-redux";
import { add } from "../store/cart";
import { colors } from "@mui/material";

function cart() {
  let [data, setData] = useState([]);
  let navigate = useNavigate();
  let [amount, setAmount] = useState(1);
  let [selectedColor, setSelectedColor] = useState("");
  let [count, setCount] = useState(1);
  let dispatch = useDispatch();

  let id = useParams().id;
  useEffect(() => {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products/${id}`)

      .then((response) => {
        if (response.status === 200) {
          console.log("API response:", response.data.data);
          setData(response.data.data);
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, [id]);

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
  function bag() {
    navigate("/bag");
  }
  function addtobag() {
    let obj = {
      id: id,
      count: count,
      colors: selectedColor,
      count: count,
    };
    dispatch(add(obj));
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
              className="text-sm px-4 py-2 bg-[#021431] ml-1 cursor-pointer rounded-xl"
            >
              Products
            </li>
            <li
              onClick={bag}
              className="text-sm px-4 py-2 text-[#394E6A] ml-1 cursor-pointer hover:bg-gray-400 rounded-xl"
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
        <div className="container mx-auto w-[1200px] flex items-center gap-2 mt-9 mb-12">
          <p className="ml-20 text-[#394e6a] cursor-pointer text-lg">Home </p>
          <i className="fa-solid fa-chevron-right text-[#394e6a] text-lg"></i>
          <p className=" text-[#394e6a] text-lg cursor-pointer">Products</p>
        </div>
        {data?.attributes && (
          <div className="container mx-auto w-[1200px] justify-center flex">
            <div className="w-1/2 rounded-lg">
              <img
                src={data.attributes.image}
                alt=""
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 ml-11">
              <h2 className="text-2xl font-semibold text-[#394e6a] mb-4">
                {data.attributes.title}
              </h2>
              <p className="text-2xl text-[c7c9d1]] font-bold mb-6">
                ${data.attributes.company}
              </p>
              <p className="text-2xl text-blue-600 font-bold mb-6">
                ${data.attributes.price}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {data.attributes.description}
              </p>
              <p>Colors</p>
              {/* <div class="flex mr-[80%] items-center justify-center gap-6 mt-10">
                <label class="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="color"
                    value="green"
                    class="hidden peer"
                  />
                  <div class="w-10 h-10 bg-green-500 rounded-full border-4 border-transparent peer-checked:border-blue-500 transition-all"></div>
                </label>

                <label class="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="color"
                    value="red"
                    class="hidden peer"
                  />
                  <div class="w-10 h-10 bg-blue-600 rounded-full border-4 border-transparent peer-checked:border-blue-500 transition-all"></div>
                </label>
              </div> */}
              <div className="flex gap-2 mt-5">
                {data.attributes.colors.length > 0 &&
                  data.attributes.colors.map((color, index) => {
                    return (
                      <span
                        key={index}
                        onClick={() => {
                          setSelectedColor(color);
                        }}
                        className="w-[25px] cursor-pointer h-[25px] rounded-full  block"
                        style={{
                          backgroundColor: color,
                          border:
                            color == selectedColor ? "2px solid black" : "none",
                        }}
                      ></span>
                    );
                  })}
              </div>
              <div className="w-64 ml-1 mb-10 mx-auto mt-6">
                <label
                  htmlFor="number-select"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Amount
                </label>
                <select
                  value={count}
                  onChange={(e) => {
                    setCount(e.target.value);
                  }}
                  id="number-select"
                  className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </select>
              </div>
              <button
                onClick={addtobag}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Add to Bag
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default cart;
