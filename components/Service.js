import React from "react";

export default function Service() {
  return (
    <>
      <div className="w-full bg-[#2f564f] bg-opacity-[6%] mt-16 py-16">
        <div className="w-full max-w-[1000px] flex items-center justify-between mx-auto ">
          <div>
            <img src="/service.png" alt="service" className="w-[30rem]" />
          </div>
          <div className="w-full max-w-[450px]">
            <h2 className="w-full text-[45px] text-[#2f564f] font-[600] ">
              Our Program
            </h2>
            <p className="max-w-[25rem] text-[#2f564f] mt-4">
              our program is to serve Japanese sepecialistusing using ingridient
              that are 100% Halal and Suitable for consumtion by all human in
              the world
            </p>
            <div className="w-full bg-[#2f564f] py-7 px-10 mt-8">
              <div className="space-y-7">
                <div className="flex justify-center items-center gap-5 px-6 text-white">
                  <img src="/halal.png" alt="" />
                  <div className="w-full">
                    <p className="text-lg tracking-[0.5px]">
                      100% Halal Recipe
                    </p>
                    <p className="text-[12px]">Suitable for consumptions</p>
                  </div>
                  <img
                    src="/kanan.svg"
                    alt=""
                    className="w-6 h-6 cursor-pointer"
                  />
                </div>
                <div className="flex justify-center items-center gap-5 px-6 text-white">
                  <img src="/vegan.png" alt="" />
                  <div className="w-full">
                    <p className="text-lg tracking-[0.5px]">
                      Have a Vegan Menu
                    </p>
                    <p className="text-[12px]">Not Have any "Niku" inside</p>
                  </div>
                  <img
                    src="/kanan.svg"
                    alt=""
                    className="w-6 h-6 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
