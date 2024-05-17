import React from "react";
import NavBar from "../Components/HomeNavBar";
import Footer from "../Components/Footer";

const HomePage =()=>{
    return(
        <div className="flex flex-col justify-between gap-[600px]">
            <div classsName="flex w-full ">
                <NavBar />
            </div>
            {/* <HomeAds /> */}
            {/* <Service /> */}
            {/* <div className="bg-white w-full p-24"></div> */}
            <div className="flex w-full">
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;