import React, {useState} from "react";
import logo from "../Assets/hafib.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Services from "./Service";
import HomeAds from "../Components/HomeAds";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isServiceVisible, setIsServiceVisible] = useState(false);

    const toggleServiceVisibility = () => {
        setIsServiceVisible(!isServiceVisible);
    };
    
  return (
    <section id="nav" className="bg-[#065982] h-96 flex flex-col justify-start items-center gap-8 p-10">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-row p-5 text-white items-center cursor-pointer">
          <img src={logo} alt="" width={40} />
          <p className="text-2xl font-sans font-semibold">Hafi Yacu</p>
        </div>
        <div className="search flex flex-row justify-between items-center gap-7">
          <div className="flex justify-between items-center bg-white rounded-3xl p-2 w-96 ">
            <input
              type="text"
              name="search"
              id=""
              placeholder="Seach here"
              className="flex p-1 w-[90%] focus:border-0"
            />
            <Icon icon="material-symbols:search" className="w-[10%] cursor-pointer"/>
          </div>
          <div className="flex gap-7 justify-center items-center text-white font-semibold">
            <Link to="/"><p className="hover:text-blue-400 cursor-pointer">Home</p></Link>
            <div onClick={toggleServiceVisibility} className="flex items-center justify-center gap-1"><p className="hover:text-blue-400 cursor-pointer">Service</p><Icon className="hover:text-blue-400 cursor-pointer hover:text-lg" icon="oui:arrow-down"/></div>
            <Link to="/subscribe"><p className="hover:text-blue-400 cursor-pointer">Subscribe</p></Link>
            <p className="hover:text-blue-400 cursor-pointer">Login</p>
            <p className="hover:text-blue-400 cursor-pointer">Register</p>
            <p className="hover:text-blue-400 cursor-pointer">En</p>
            <p className="hover:text-blue-400 cursor-pointer">Kin</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 justify-center items-center text-center text-white font-bold text-xl">
        Hafi Yacu
        {!isServiceVisible && <HomeAds/>}
      </div>
      {isServiceVisible && <Services />}
    </section>
  );
};

export default NavBar;
