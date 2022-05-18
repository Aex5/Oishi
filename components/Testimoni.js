import React from "react";

export default function Testimoni() {
  return (
    <>
      <div className="w-full bg-[#2f564f]">
        <div className="max-w-[1000px] mx-auto py-28">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h3 className="max-w-[30rem] text-[45px] font-[600] tracking-[0.2px]">
                What Customer Says About Us
              </h3>
              <p className="text-lg mt-5 tracking-[0.5px]">
                it's a honor to get an apreciations from customers
              </p>
              {/* raptalia comment */}
              <div className="w-[26rem] px-5 mt-8 tracking-[0.3px] text-lg border-l-4  border-lime-500">
                <i>
                  "This website really helps me to cook a variety japanese food
                  that are halal and of course ver tasty, i recommend gyoza
                  dhises, very easy to cook and delicious & halal"
                </i>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <img
                        src="/raptalia.jpg"
                        alt=""
                        className="rounded-full w-[2rem]"
                      />
                      <p className="text-lg font-semibold tracking-[1px]">
                        Suzuran
                      </p>
                    </div>
                    <p className="text-xs mt-1">
                      <i>UWOOOGHHHHH CUNNY</i>
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <a className="opacity-30">⬅</a>
                    <a>➡</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/tuna.png"
                alt=""
                className="translate-y-10 w-[27rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
