import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="text-center text-white max-w-lg w-full p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-7xl font-bold mb-6">404</h1>
        <p className="text-2xl mb-6">Oops! Something went wrong.</p>
        <p className="text-lg mb-8">
          We can't seem to find the page you're looking for.
        </p>
        <button
          onClick={goHome}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-lg text-white rounded-md transition duration-300 ease-in-out"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
