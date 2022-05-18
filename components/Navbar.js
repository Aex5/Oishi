import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="w-full max-w-[1000px] py-8 mx-auto flex justify-between items-center">
        <div>
          <img src="/Logo.png" alt="logo" className="w-24" />
        </div>
        <div className="text-[#2f564f]">
          <ul className="flex gap-10">
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Recipe</a>
            </li>
            <li>
              <a href="">Testimoni</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="px-8 py-3 bg-[#2f564f] text-white">sign in</button>
        </div>
      </div>
    </>
  );
}
