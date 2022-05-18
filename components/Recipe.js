import React from "react";

export default function Recipe() {
  return (
    <>
      <div className="w-full mt-20 mb-32">
        <div className="w-full max-w-[1000px] mx-auto">
          <div>
            <h1 className="text-[45px] text-[#2f564f] font-[600]">
              Our Recipe
            </h1>
            <p className="max-w-[22rem] text-lg tracking-[0.1px] text-[#2f564f] mt-4">
              We strive to serve food that makes your body helathy and full of
              energy
            </p>
          </div>

          <div className="flex justify-between">
            <div className="mt-5 w-[20rem] h-[22rem] overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-emerald-900 scrollbar-track-gray-100 ">
              <div className="text-lg text-[#2f564f] space-y-6">
                <button className="flex items-center w-[14rem] h-14 py-1 px-5 gap-5 bg-[#2f564f] bg-opacity-[6%] hover:bg-[#2f564f] hover:text-white">
                  <img src="/breakfest.png" alt="" className="w-[2rem]" />
                  <p>Breakfest</p>
                </button>

                <button className="flex items-center w-[14rem] h-14 py-1 px-5 gap-5 bg-[#2f564f] bg-opacity-[6%] hover:bg-[#2f564f] hover:text-white">
                  <img src="/udang.png" alt="" className="w-[2rem]" />
                  <p>Lunch</p>
                </button>

                <button className="flex items-center w-[14rem] h-14 py-1 px-5 gap-5 bg-[#2f564f] bg-opacity-[6%] hover:bg-[#2f564f] hover:text-white">
                  <img src="/onigiri.png" alt="" className="w-[2rem]" />
                  <p>Dinner</p>
                </button>

                <button className="flex items-center w-[14rem] h-14 py-1 px-5 gap-5 bg-[#2f564f] bg-opacity-[6%] hover:bg-[#2f564f] hover:text-white">
                  <img src="/dango.png" alt="" className="w-[2rem]" />
                  <p>Snacks</p>
                </button>

                <button className="flex items-center w-[14rem] h-14 py-1 px-5 gap-5 bg-[#2f564f] bg-opacity-[6%] hover:bg-[#2f564f] hover:text-white">
                  <img src="/tuna.png" alt="" className="w-[2rem]" />
                  <p>Fast Food</p>
                </button>

                <button className="flex items-center w-[14rem] h-14 py-1 px-5 gap-5 bg-[#2f564f] bg-opacity-[6%] hover:bg-[#2f564f] hover:text-white">
                  <img src="/service.png" alt="" className="w-[2rem]" />
                  <p>Other Food</p>
                </button>
              </div>
            </div>

            <div className="flex pt-4 gap-10">
              <div className="relative">
                <div className="absolute p-5 bottom-0 text-white">
                  <h3 className="text-xl font-[600]">Gyoza</h3>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt molestias,
                  </p>
                  <button className="text-xs bg-[#2f564f] py-2 px-4 mt-2">
                    See Recipe
                  </button>
                </div>
                <img src="/pangsit.png" alt="" className="w-[18rem]" />
              </div>

              <div className="relative">
                <div className="absolute p-5 bottom-0 text-white">
                  <h3 className="text-xl font-[600] ">Sushi</h3>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt molestias,
                  </p>
                  <button className="text-xs bg-[#2f564f] py-2 px-4 mt-2">
                    See Recipe
                  </button>
                </div>
                <img src="/sushi.png" alt="" className="w-[18rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
