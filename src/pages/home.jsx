import React from "react";
import { Link } from "react-router-dom";
import img from "../asset/home.png";
import Navbar from "../component/navbar";
import Swip from "../component/swiper";
// import SwipTwo from "../component/swiperTwo";




export const Home = () => {
  return (
    <div className="bg-sky-800 p-10 h-full">
      <Navbar />
      <h1
        className="text-6xl text-gray-300 mt-10 text-center"
        behavior="crow"
        direction="left "
      >
        Welcome to <span className="text-cyan-400">CoinSense!</span> 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-20 ">
        <div className="mt-40 text-center">
      <Swip/>
      </div>
      <img src={img} alt="" />

      </div>
     
    </div>
    
  );
};
