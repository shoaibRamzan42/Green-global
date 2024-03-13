import React from "react";
import Claimcard from "./Claimcard";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col-reverse font-custom gap-32  md:flex-row bg-transparent lg:px-16 md:px-16  md:pt-[150px]  py-6 justify-start  items-center">
        <div className="w-[41%]">
          <h5 class="text-white font-bold text-[16px] sm:text-[18px] uppercase">
            Green Energy Revolution
          </h5>
          <h2 class="font-extrabold  text-[32px] sm:text-[42px] md:text-[52px] text-green-600 mt-3">
            A utility token for{" "}
          </h2>
          <h2 class="font-extrabold  text-[28px] sm:text-[42px] md:text-[52px] text-green-600">
            sustainable fracking in the oil and gas sector
          </h2>
          <p class="text-[#ADA9B2] text-[17px] sm:text-[20px] my-5">
            Enter a world where green technologies and sustainable fracking are
            redefining the boundaries of the energy industry. Learn how an
            innovative utility token is paving the way to a green oil and gas
            industry while driving the energy transition.
          </p>
          <div class="py-2 flex items-center gap-6 flex-wrap">
            <button class="rounded text-[16px] relative overflow-hidden inline-flex group items-center justify-center px-6 py-2  cursor-pointer active:shadow-none shadow-lg btn-bg text-white">
              <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <a href="/assets/WHITEPAPER-5dac0a59.pdf">
                {" "}
                <span class="relative">Whitepaper</span>
              </a>
            </button>
          </div>
        </div>
        <div className="relative">
          <Claimcard />
        </div>
      </div>
    </>
  );
};

export default Banner;
