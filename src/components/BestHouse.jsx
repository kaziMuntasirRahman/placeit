import src from "daisyui";
import { key } from "localforage";
import React from "react";

const BestHouse = () => {
  const houses = [
    'images/best houses/house-1.jpg',
    'images/best houses/house-2.jpg',
    'images/best houses/house-3.jpg']

  return (
    <div className="flex flex-col text-center mt-[85px] mb-[60px] px-[370px]">
      <p className="home-section-title">We are offering the Best Real Estate</p>
      <h2 className="home-section-heading">Best House to Purchase</h2>
      <div className="mx-auto bg-black w-[50px] h-1 mb-[70px]">
        <div className="bg-primaryColor w-1/2 h-full ml-auto" />
      </div>
      <div className="flex justify-between">
        {
          houses.map((house, index) =>
            <div className="relative overflow-hidden group">
              <img src={house} key={index} className="w-full h-full object-cover" />
              <div className="bg-[#00000080] absolute right-full top-0 h-full w-full flex flex-col justify-between transition-right duration-700 ease-in-out group-hover:right-0">
                <div />
                <div />
                <h1 className="text-[40px] text-center text-white font-bold">HOUSE</h1>
                <p className="bg-[#71b10080] text-white text-lg w-full h-[60px] flex items-center justify-center font-medium font-yantramanav">
                  Make Best House to Purchase
                </p>
              </div>
            </div>
























          )}
      </div>
    </div>
  );
};

export default BestHouse;