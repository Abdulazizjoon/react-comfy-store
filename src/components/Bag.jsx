import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);

  return (
    <div>
      <header className="bg-blue-950 py-2">
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
              onClick={() => navigate("/")}
              className="text-sm px-4 py-2 hover:bg-gray-400 text-[#394E6A] ml-1 cursor-pointer rounded-lg"
            >
              Home
            </li>
            <li
              onClick={() => navigate("/about")}
              className="text-sm px-4 py-2 text-[#394E6A] ml-1 cursor-pointer hover:bg-gray-400 rounded-xl"
            >
              About
            </li>
            <li
              onClick={() => navigate("/products")}
              className="text-sm px-4 py-2 text-[#394E6A] ml-1 cursor-pointer hover:bg-gray-400 rounded-xl"
            >
              Products
            </li>
            <li className="text-sm px-4 py-2 text-[#c7c9d1] ml-1 bg-[#021431] cursor-pointer rounded-xl">
              Cart
            </li>
          </ul>
          <div className="text-center mt-1">
            <i className="fa-solid fa-moon text-lg cursor-pointer"></i>
            <i className="fa-solid fa-cart-shopping text-lg ml-4 cursor-pointer"></i>
          </div>
        </div>
      </nav>
      <section className="max-w-6xl mx-auto px-8 py-20">
        {cart.length === 0 ? (
          <div>
            <h2 className="text-3xl tracking-wider font-medium text-col3 mb-5">
              Your Cart Is Empty
            </h2>
            <hr />
          </div>
        ) : (
          <div>
            <div className="mb-10">
              <h2 className="text-3xl tracking-wider font-medium text-col3 mb-5">
                Shopping Cart
              </h2>
              <hr />
            </div>
            <div className="space-y-4">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-start"
                >
                  <div className="flex gap-x-20">
                    <img
                      src={product.attributes.image}
                      alt={product.attributes.title}
                      className="w-32 h-32 rounded-lg object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="capitalize text-col3 text-xl font-semibold">
                        {product.attributes.title}
                      </span>
                      <span className="text-col1 text-sm inline-block mt-2">
                        {product.attributes.company}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-normal text-col3">
                        Amount: {product.amount}
                      </span>
                      <button
                        className="text-col6"
                      >
                        remove
                      </button>
                    </div>
                    <span className="text-col3 font-semibold">
                      ${product.attributes.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Cart;
