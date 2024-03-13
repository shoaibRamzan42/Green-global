import React from "react";
import logo from "../src/assets/usdt.png";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Claimcard = () => {
  return (
    <div className="flex justify-center mt-[80px] lg:mt-0 items-center relative z-20 w-[90%] mx-auto md:w-[165%]">
      <div class="relative px-[30px] border border-green-600  py-[20px] mx-auto w-[65%]  h-[580px] bg-[#080513] rounded-[23px] inline-block text-[30px]">
        <p className="text-white text-center text-[14px] sm:text-[19px] font-bold mt-[20px]">
          CLAIM UPTO 20% PRESALE BONUS
        </p>
        <div className="flex justify-center items-center gap-[10px] mt-[15px]">
          <img
            src={logo}
            alt="pics"
            className="h-[25px] sm:h-[35px] flex-shrink-0"
          />
          <h2 class="text-white text-[14px] sm:text-[16px] font-bold">
            1 GGE = 1 USDT
          </h2>
          <img
            src={logo}
            alt="pics"
            className="h-[25px] sm:h-[35px] flex-shrink-0"
          />
        </div>
        <h2 class="text-center text-white text-[19px] sm:text-[23px] mt-[30px] font-bold leading-[35px]">
          Stage 1: $2.500.000
        </h2>
        
          <div class="bg-slate-700 mt-8 h-[22px] rounded-[10px]">
            <h2 class="text-center text-white relative z-10 text-[12px] pt-[2px] font-bold">
              Next Stage Price: $1.20
            </h2>
          </div>
          <div className="flex items-center  bg-black border border-white p-3 rounded-xl mt-8">
          <MonetizationOnOutlinedIcon className="text-white h-4 w-4" />
          <input type="number" className="bg-transparent" required placeholder="Enter the USDT amount" />

          </div>
        
      </div>
    </div>
  );
};

export default Claimcard;
