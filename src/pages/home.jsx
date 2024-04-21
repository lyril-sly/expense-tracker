import React from "react";
import { Link } from "react-router-dom";
import img from "../asset/image4.png";
import Navbar from "../component/navbar";

export const Home = () => {
  return (
    <div className="bg-sky-800 p-20 h-full">
      <Navbar />
      <marquee
        className="text-6xl text-cyan-400"
        behavior="crow"
        direction="left "
      >
        Welcome to Spend Wise
      </marquee>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-20 ">
        <div className="p-5">
          <div className="shadow-lg grid grid-cols-1 md:grid-cols-1 bg-cyan-950 backdrop-filter backdrop-blur-lg bg-opacity-30 gap-5 mt-10 mb-5 w-60">
            <h1 className="text-center text-sky-100 text-2xl bg-cyan-400 rounded">
              Budget
            </h1>
            <p className="text-gray-200 text-center">
              Don’t ask how to budget money—ask why you want to budge... A
              budget doesn’t have to be complicated. All it takes is writing
              down how much comes in every month, how much must go out for rent,
              bills, food and other expenses, and how you want to use what’s
              left over. Gaining awareness of where your money goes is key to
              exercising control over your spending
            </p>

            <button className="bg-gradient-to-r from-purple-500 to-sky-400 shadow-lg to-sky-400 text-center w-20 ml-10 font-bold text-white p-2 rounded-2xl mt-5 mb-5">
              <Link>Click</Link>
            </button>
          </div>
          <div className="shadow-lg grid grid-cols-1 md:grid-cols-1  bg-cyan-950 backdrop-filter backdrop-blur-lg bg-opacity-30 gap-5 mt-10 mb-5 w-60">
            <h1 className="text-center text-gray-100 text-2xl bg-cyan-400 rounded">
              Transaction
            </h1>
            <p className="text-gray-200 text-center">
              Never let your expenses exceed your income, and watch where your
              money goes... Tracking expenses, like your expensive morning
              coffee, can provide a valuable wake-up call. Small changes in your
              everyday expenses are under your control and can impact your
              financial situation
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-sky-400 shadow-lg ml-10 text-center w-20 font-bold text-white p-2 rounded-2xl mt-5 mb-5">
              <Link>Click</Link>
            </button>
          </div>
          <div className="shadow-lg grid grid-cols-1 md:grid-cols-1 bg-cyan-950 backdrop-filter backdrop-blur-lg bg-opacity-30 gap-5 mt-10 mb-5 w-60">
            <h1 className="text-center text-gray-100 text-2xl bg-cyan-400 rounded">
              Money
            </h1>
            <p className="text-gray-200 text-center">
              Why tracking your money is important? Tracking your spending can
              help you manage your money well and make progress towards your
              goals. When you know where each dollar is going, you're more
              empowered to make changes to your cash flow. You'll also have a
              good understanding of how much you're able to save toward new
              financial goals.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-sky-400 text-center w-20 ml-10 font-bold text-white p-2 rounded-2xl mt-5 mb-5">
              <Link>Click</Link>
            </button>
          </div>
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};
