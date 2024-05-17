import React, {useState} from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
    const [isServiceVisible, setIsServiceVisible] = useState(false);

    const toggleServiceVisibility = () => {
        setIsServiceVisible(!isServiceVisible);
    };
  return (
    <section id="foot" className="bg-[#065982] w-full absolute text-white flex flex-col gap-4">
        <div className="flex justify-center items-start gap-10 p-8 w-full">
            <div className="flex flex-col justify-start items-start text-start w-[50%] gap-3">
                <h2 className="text-lg font-bold">Our mission</h2>
                <p className="w-">To deliver excellent quality services, operate in a responsible manner being up-to-date with the upgrading Information Technology, and provide fast online services for a highly reliable and consistently satisfying customer experience.</p>
            </div>
            <div className="flex justify-center items-start gap-10 w-[50%]">
                
            <div className="flex flex-col text-start justify-start items-start gap-3">
                <h2 className="text-lg font-bold">Useful links</h2>
                <div className="flex flex-col justify-start items-start text-start gap-2">
                    <a href="" className="decoration-none hover:text-blue-500"><p>Home</p></a>
                    <a href="" className="decoration-none hover:text-blue-500"><p>Subscribe</p></a>
                    <a href="" onClick={toggleServiceVisibility} className="decoration-none hover:text-blue-500"><p>Service</p></a>
                </div>
            </div>
            <div className="flex flex-col text-start justify-start items-start gap-3">
                <h2 className="text-lg font-bold">Contact us</h2>
                <div className="flex flex-col justify-start items-start text-start gap-2">
                    <a href="" className="decoration-none hover:text-blue-500"><p>0783544930</p></a>
                    <a href="" className="decoration-none hover:text-blue-500"><p>gasasiraemmy36@gmail.com</p></a>
                    <div className="flex gap-2 font-bold text-xl">
                        <Icon icon="ic:baseline-facebook" className="cursor-pointer hover:text-blue-500"/>
                        <Icon icon="mdi:instagram" className="cursor-pointer hover:text-blue-500"/>
                        <Icon icon="pajamas:twitter" className="cursor-pointer hover:text-blue-500"/>
                        <Icon icon="ic:baseline-whatsapp" className="cursor-pointer hover:text-blue-500"/>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="w-full flex justify-center items-center">
        <hr className="w-[90%] font-extrabold"/>
        </div>
        <div className="text-md font-bold">
            Hafi Yacu©2024
        </div>
    </section>
  );
};

export default Footer;
