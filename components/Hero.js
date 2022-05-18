import React from "react";

export default function Hero() {
  return (
    <>
      <div className="h-[100%] max-w-[1000px] mx-auto mt-14">
        <div className="flex">
          <div>
            <h1 className="w-[26rem] font-[600] text-[45px] leading-[4rem] text-[#2f564f]">
              Make Your <br /> Japanese Food In <br /> Your Own Kitchen
            </h1>
            <p className="max-w-[22rem] text-lg mt-5 text-[#2f564f]">
              Make your own food that you want directly from the recipe of the
              professionals
            </p>
            <button className="mt-7 py-3 px-9 bg-[#2f564f] text-white">
              see recipe
            </button>
          </div>
          <div>
            <img src="/hero.png" alt="hero" className="w-[50rem]" />
          </div>
        </div>
        <div className="mt-9">
          <img src="/Hiasan 1.png" alt="hiasan" className="w-[55rem] mx-auto" />
        </div>
      </div>
    </>
  );
}
