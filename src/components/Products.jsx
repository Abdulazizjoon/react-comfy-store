import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

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
  function click(id) {
    localStorage.setItem("id", id);
    navigate(`/cart/${id}`);
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
              className="text-sm px-4 py-2 text-[#c7c9d1] ml-1 cursor-pointer bg-[#021431] rounded-xl"
            >
              Products
            </li>
            <li
              onClick={cart}
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
      <section className="container mx-auto mt w-[1200px] bg-[#b4eaea] rounded-xl p-8">
        <form className="grid grid-cols-4 gap-6">
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Search Product
            </label>
            <input
              id="search"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category
            </label>
            <select id="category" className="select select-bordered w-full">
              <option value="">All Categories</option>
              <option value="furniture">Furniture</option>
              <option value="decor">Decor</option>
              <option value="bedding">Bedding</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="minPrice"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Min Price
            </label>
            <input
              id="minPrice"
              type="number"
              placeholder="Min"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label
              htmlFor="maxPrice"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Max Price
            </label>
            <input
              id="maxPrice"
              type="number"
              placeholder="Max"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Rating
            </label>
            <select id="rating" className="select select-bordered w-full">
              <option value="">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars & Above</option>
              <option value="3">3 Stars & Above</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="availability"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Availability
            </label>
            <select id="availability" className="select select-bordered w-full">
              <option value="">All</option>
              <option value="inStock">In Stock</option>
              <option value="outOfStock">Out of Stock</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="sortBy"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Sort By
            </label>
            <select id="sortBy" className="select select-bordered w-full">
              <option value="popularity">Popularity</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>

          <div className="col-span-4 flex justify-end">
            <button
              type="submit"
              className="btn btn-primary bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700"
            >
              Apply Filters
            </button>
          </div>
        </form>
      </section>
      <div className="flex flex-wrap mx-auto gap-4 w-[1200px] justify-between">
        {data.map((value, index) => (
          <div
            onClick={() => click(value.id)}
            key={index}
            className=" cursor-pointer bg-white rounded-lg p-3 shadow-lg  w-80"
          >
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
      <div>
        <div className="join justify-end container w-[1200px] mx-auto flex">
          <button className="join-item btn">«</button>
          <button className="join-item btn">Page 22</button>
          <button className="join-item btn">»</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
