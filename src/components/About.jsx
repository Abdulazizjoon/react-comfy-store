import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  let [data, SetData] = useState([]);
  let navigate = useNavigate();
  useEffect(function () {
    axios
      .get(
        `https://react-vite-comfy-store-v2.netlify.app/assets/index-d2914d39.js`
      )
      .then((response) => {
        if (response.status == 200) {
          SetData(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function about() {
    navigate("/about");
  }
  function home() {
    navigate("/");
  }
  function product() {
    navigate("/products");
  }
  return (
    <div>
      <header className="bg-blue-950 py-2 ">
        <div className=" flex justify-center sm:justify-end w-[1200px] container mx-auto">
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
              className="text-sm px-4 py-2 text-[#394E6A] ml-1 cursor-pointer hover:bg-gray-400 rounded-lg"
            >
              Home
            </li>
            <li
              onClick={about}
              className="text-sm px-4 py-2 text-[#c7c9d1] ml-1 cursor-pointer rounded-xl bg-[#021431]"
            >
              About
            </li>
            <li
              onClick={product}
              className="text-sm px-4 py-2 text-[#394E6A] ml-1 cursor-pointer hover:bg-gray-400 rounded-xl"
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
      <section className="text-center">
        <div className="flex justify-center text-center gap-6 mt-20">
          <h2 className="text-6xl font-bold text-[#394e6a]">We love</h2>
          <button className="bg-blue-500 px-6 py-4 rounded-lg tracking-widest text-[#dbe1ff] font-bold text-4xl">
            comfy
          </button>
        </div>
        <div className="mt-6 max-w-2xl leading-8 text-lg text-[#394e6a] justify-center mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
          quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia
          optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo
          sed officiis ea tempore! Similique eos minima sit porro, ratione
          aspernatur!
        </div>
      </section>
      {data.length > 0 &&
        data.map((value, index) => {
          return (
            <div key={index}>
              <h1>{value}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default About;
