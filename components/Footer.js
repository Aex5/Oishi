import React from "react";

export default function Footer() {
  return (
    <>
      <div className="w-full mt-20">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-start justify-between">
            <div>
              <img src="/logo.png" alt="logo" />
              <p className="w-[22rem] text-[#2f564f] tracking-[0.3px]">
                Oishi is a website thats serve a japanese food recipe using 100%
                halal ingridient
              </p>
            </div>

            {/* nav link */}
            <div className="w-[30rem] text-[#2f564f] flex justify-between">
              <div className="space-y-5">
                <h3 className="text-xl font-semibold">Menu</h3>
                <ul className="space-y-5">
                  <li>Home</li>
                  <li>Service</li>
                  <li>Recipe</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h3 className="text-xl font-semibold">Follow Us</h3>
                <ul className="space-y-5">
                  <li>Twiter</li>
                  <li>Facebook</li>
                  <li>Instagram</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h3 className="text-xl font-semibold">Support</h3>
                <ul className="space-y-5">
                  <li>Help Center</li>
                  <li>FAQ</li>
                  <li>Comtact us</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex gap-10 mt-20 pb-5 text-[#2f564f]">
            <p>@2022 Oishi All Right Reserved</p>
            <p>Privacy Policy</p>
            <p>Term Of Use</p>
          </div>
        </div>
      </div>
    </>
  );
}
