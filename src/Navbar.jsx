import React, { useState } from 'react';
import cLogo from "../src/assets/logo-377d2e97.png"




import { IconButton } from "@mui/material";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);}

    
  return (
    <>
       <nav className="py-6 font-custom  fixed top-0 w-full  bg-[#080513] px-3 z-[40] lg:px-16 md:px-12 flex justify-between items-center shadow-lg">
      <img src={cLogo} alt="logo" className=" h-[37px]" />
      <div className="flex md:flex-row flex-col-reverse items-center">
        <ul className={`font-custom text-[#ADA9B2] w-full h-screen md:h-0 md:static gap-2 bg-[#080513] absolute top-20 right-0 p-3 md:p-0   md:bg-transparent md:flex md:flex-row md:gap-4 lg:gap-6 justify-center lg:text-[18px] md:text-[55%]  md:leading-[13px] font-semibold transition-m duration-500 ease-in-out ${menuOpen ? 'max-h-screen' : 'hidden'}`}>
          <li className=' '>
            <button className="text-[#ADA9B2] animate capitalize text-[18px] hover:underline underline-offset-8 hover:scale-105 duration-700 cursor-pointer font-medium"  onClick={() => {
                    
                    const Element = document.getElementById("code");
                    if (Element) {
                      Element.scrollIntoView({ behavior: "smooth" });
                    }
                    handleMenuItemClick();
                  }}>
              how to invest
            </button>
          </li>
          {/* <li className='hover:bg-gray-300 p-2 md:p-0 md:hover:bg-transparent  '>
            <button className="uppercase animate tracking-widest hover:scale-110" onClick={() => {
                    
                    const Element = document.getElementById("services");
                    if (Element) {
                      Element.scrollIntoView({ behavior: "smooth" });
                    }
                    handleMenuItemClick();
                  }}>
              Services
            </button>
          </li> */}
          {/* <li className=' hover:bg-gray-300 p-2 md:p-0  md:hover:bg-transparent '>
            <button className="uppercase animate tracking-widest hover:scale-110" onClick={() => {
                    
                    const Element = document.getElementById("portfolio");
                    if (Element) {
                      Element.scrollIntoView({ behavior: "smooth" });
                    }
                    handleMenuItemClick();
                  }}
              >
              Portfolio
            </button>
          </li> */}
          <li className='text-[#ADA9B2] animate  capitalize text-[18px] hover:underline underline-offset-8 hover:scale-105 duration-700 cursor-pointer font-medium '>
            <button className="" onClick={() => {
                    
                    const Element = document.getElementById("hire");
                    if (Element) {
                      Element.scrollIntoView({ behavior: "smooth" });
                    }
                    handleMenuItemClick();
                  }}>
              Token info
            </button>
          </li>
          <li className=' '>
            <button className="text-[#ADA9B2] animate  font-custom capitalize text-[18px] hover:underline underline-offset-8 hover:scale-105 duration-700 cursor-pointer font-medium" onClick={() => {
                    
                    const Element = document.getElementById("work");
                    if (Element) {
                      Element.scrollIntoView({ behavior: "smooth" });
                    }
                    handleMenuItemClick();
                  }}>
              How To Buy GGE
            </button>
          </li>
        </ul>
        <IconButton onClick={toggleMenu} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 text-white md:hidden h-5">
            <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </IconButton>
      </div>
      <button className={`hidden md:block uppercase animate hover:scale-105 duration-700  btn-bg font-custom font-semibold text-[#FAFAFA] py-3 md:py-4 px-4 rounded-[5px] text-[12px] md:text-[14px] leading-4 ${menuOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}>
        Connect Wallet
      </button>
    </nav>

    </>
  );
};

export default NavBar;

