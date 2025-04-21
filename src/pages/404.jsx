import React from "react";
import { MSClickButtonMain } from "../components/CustomButtons.jsx"
import MainHeaderTypography from "../components/muiStyles/mainHeaderTypography.tsx";
import { Link } from "react-router-dom";

const PageNotFound = () => {

  const signOutToLogin = () => {
  };

  return (
    <div className="d-col-flex">
      <section class="bg-blue-50 min-h-screen flex-grow">
        <div class="container m-auto max-w-2xl py-24">
          <div
            class="bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0"
          >
            <div class="flex justify-center">
              <i
                class="fas fa-exclamation-triangle fa-5x text-8xl text-yellow-400"
              ></i>
            </div>
            <div class="text-center">
              <h1 class="text-3xl font-bold mt-4 mb-2">Page Not Found</h1>
              <p class="text-gray-500 text-xl mb-10">
                The page you are looking for does not exist.
              </p>
              <Link
                to="/"
                class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded"
              >Go Home</Link>
            </div>
          </div>
        </div>
        <div class="flex-grow"></div>
      </section>
    </div>
  );
};

export default PageNotFound;
