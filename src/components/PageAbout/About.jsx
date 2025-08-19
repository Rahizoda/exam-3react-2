import React from "react";
import img1 from "..//PageAbout/images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import img2 from "..//PageAbout/images/Frame 874.png";
import img3 from "..//PageAbout/images/Frame 875.png";
import img4 from "..//PageAbout/images/Frame 876.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ShieldIcon from '@mui/icons-material/Shield';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./stylepag.css";

// import required modules
import { Pagination } from "swiper/modules";

const About = () => {
//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + "</span>";
//     },
//   };
  return (
    <>
      <p className="mt-[200px] ml-[50px] text-2xl text-black">
        {" "}
        <span className="text-gray-500">Home \</span> About
      </p>

      <div className="flex justify-around items-center">
        <div>
          <h1 className="text-6xl">Our Story</h1> <br />
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping{" "}
            <br />
            makterplace with an active presense in Bangladesh. Supported <br />
            by wide range of tailored marketing, data and service solutions,{" "}
            <br />
            Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
            millioons customers across the region. <br />
            <br />
            <br />
            Exclusive has more than 1 Million products to offer, growing at a{" "}
            <br />
            very fast. Exclusive offers a diverse assotment in categories <br />
            ranging from consumer.
          </p>
        </div>
        <img className="w-[600px]" src={img1} alt="" />
      </div>

      <div className="flex justify-around items-center w-[90%] m-auto mt-[100px]">
        <div className="flex flex-col justify-center items-center gap-[20px] hover:bg-[#DB4444] hover:text-white w-[270px] h-[230px] border border-gray-500">
          <StorefrontIcon
            sx={{
              fontSize: "50px",
              bgcolor: "black",
              color: "white",
              padding: "5px",
              borderRadius: "55%",
            }}
          />
          <h2 className="text-4xl">33k </h2>
          <p>Mopnthly Produduct Sale</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-[20px] hover:bg-[#DB4444] hover:text-white w-[270px] h-[230px] border border-gray-500">
          <MonetizationOnIcon
            sx={{
              fontSize: "50px",
              bgcolor: "black",
              color: "white",
              padding: "5px",
              borderRadius: "55%",
            }}
          />
          <h2 className="text-4xl">45.5k </h2>
          <p>Customer active in our site</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-[20px] hover:bg-[#DB4444] hover:text-white w-[270px] h-[230px] border border-gray-500">
          <ShoppingBagIcon
            sx={{
              fontSize: "50px",
              bgcolor: "black",
              color: "white",
              padding: "5px",
              borderRadius: "55%",
            }}
          />
          <h2 className="text-4xl">45.5k </h2>
          <p>Sallers active our site</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-[20px] hover:bg-[#DB4444] hover:text-white w-[270px] h-[230px] border border-gray-500">
          <PointOfSaleIcon
            sx={{
              fontSize: "50px",
              bgcolor: "black",
              color: "white",
              padding: "5px",
              borderRadius: "55%",
            }}
          />
          <h2 className="text-4xl">25k </h2>
          <p>Sallers active our site</p>
        </div>
      </div>
      
      <div className="flex justify-around w-[90%] m-auto mt-[100px]">
        
              <div>
          <img src={img2} alt="" /> <br />
          <h2 className="text-2xl">Tom Cruise</h2>
          <p>Founder & Chairman</p> <br />
          <div>
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
        
        <div>
          <img src={img3} alt="" /> <br />
          <h2 className="text-2xl">Tom Cruise</h2>
          <p>Founder & Chairman</p> <br />
          <div>
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
        
        <div>
          <img src={img4} alt="" /> <br />
          <h2 className="text-2xl">Tom Cruise</h2>
          <p>Founder & Chairman</p> <br />
          <div>
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>

      {/* <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div>
          <img src={img2} alt="" /> <br />
          <h2 className="text-2xl">Tom Cruise</h2>
          <p>Founder & Chairman</p> <br />
          <div>
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
        
        <div>
          <img src={img3} alt="" /> <br />
          <h2 className="text-2xl">Tom Cruise</h2>
          <p>Founder & Chairman</p> <br />
          <div>
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
        
        <div>
          <img src={img4} alt="" /> <br />
          <h2 className="text-2xl">Tom Cruise</h2>
          <p>Founder & Chairman</p> <br />
          <div>
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div>
          <img src={img2} alt="" /> <br />
          <h2 className="text-2xl">Tom Cruise</h2>
          <p>Founder & Chairman</p> <br />
          <div>
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
        
        <div>
          <img src={img3} alt="" /> <br />
          <h2 className="text-2xl">Tom Cruise</h2>
          <p>Founder & Chairman</p> <br />
          <div>
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
        
        <div>
          <img src={img4} alt="" /> <br />
          <h2 className="text-2xl">Tom Cruise</h2>
          <p>Founder & Chairman</p> <br />
          <div>
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div>
          <img src={img2} alt="" /> <br />
          <h2 className="text-2xl">Tom Cruise</h2>
          <p>Founder & Chairman</p> <br />
          <div>
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
        
        <div>
          <img src={img3} alt="" /> <br />
          <h2 className="text-2xl">Tom Cruise</h2>
          <p>Founder & Chairman</p> <br />
          <div>
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
        
        <div>
          <img src={img4} alt="" /> <br />
          <h2 className="text-2xl">Tom Cruise</h2>
          <p>Founder & Chairman</p> <br />
          <div>
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
        </SwiperSlide>
        
        
        
      </Swiper> */}
      
      <div className="flex justify-around items-center mt-[100px]">

        <div className="text-center flex flex-col gap-[15px] justify-center items-center">
          <LocalShippingIcon sx={{bgcolor:'black', color:"white", padding:"5px", width:"50px", height:"50px", borderRadius:"55%", }}/>
          <h3 className="text-xl">FREE AND FAST DELIVERY</h3>
          <p className="text-gray-500">Free delivery for all orders over $140</p>
        </div>

        <div className="text-center flex flex-col gap-[15px] justify-center items-center">
          <SupportAgentIcon sx={{bgcolor:'black', color:"white", padding:"5px", width:"50px", height:"50px", borderRadius:"55%", }}/>
          <h3 className="text-xl">24/7 CUSTOMER SERVICE</h3>
          <p className="text-gray-500">Friendly 24/7 customer support</p>
        </div>

        <div className="text-center flex flex-col gap-[15px] justify-center items-center">
          <ShieldIcon sx={{bgcolor:'black', color:"white", padding:"5px", width:"50px", height:"50px", borderRadius:"55%", }}/>
          <h3 className="text-xl">MONEY BACK GUARANTEE</h3>
          <p className="text-gray-500">We reurn money within 30 days</p>
        </div>
      </div>

    </>
  );
};

export default About;
