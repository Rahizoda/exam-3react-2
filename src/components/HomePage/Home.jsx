import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "..//HomePage/images/ifhoneicons.png";
import img2 from "..//HomePage/images/hero_endframe__cvklg0xk3w6e_large_2.png";
import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// import img3 from "..//HomePage/images/Frame_611.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
// import img4 from "..//HomePage/images/ak-900-01-500x500 1.png";
// import img5 from "..//HomePage/images/Frame 613.png";
// import img6 from "..//HomePage/images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png";
// import img7 from '..//HomePage/images/Frame 605.png'
// import img8 from '..//HomePage/images/Frame 606.png'
// import img9 from '..//HomePage/images/Frame 610.png'
// import img10 from '..//HomePage/images/Frame 612.png'
import img11 from "..//HomePage/images/Frame 694.png";
// import img12 from '..//HomePage/images/Frame 604.png'
// import img13 from '..//HomePage/images/Frame 604 (2).png'
// import img14 from '..//HomePage/images/Frame 604 (3).png'
// import img15 from '..//HomePage/images/Frame 608.png'
// import img16 from '..//HomePage/images/Frame 608 (1).png'
// import img17 from '..//HomePage/images/Frame 608 (2).png'
// import img18 from '..//HomePage/images/Frame 608 (3).png'
// import img19 from '..//HomePage/images/curology-j7pKVQrTUsM-unsplash_1.png'
import img20 from "..//HomePage/images/ps5-slim-goedkope-playstation_large_1.png";
import img21 from "..//HomePage/images/attractive-woman-wearing-hat-posing-black-background_1.png";
import img22 from "..//HomePage/images/Frame 707.png";
import img23 from "..//HomePage/images/Frame 706.png";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ShieldIcon from "@mui/icons-material/Shield";
import { useDispatch, useSelector } from "react-redux";
import {
  GetById,
  GetCategory,
  GetProducts,
  PostCard,
} from "../../dataServer/TodoApi";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { message } from "antd";

const Home = () => {
  const dispatch = useDispatch();
  const { data, byCategory } = useSelector((state) => state.data);
  const products = data?.data?.products || [];
  const categoryes = byCategory?.data || [];

  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetCategory());
  }, [dispatch]);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Функсияи илова кардан
  const addToWishlist = (item) => {
    if (wishlist.find((i) => i.id === item.id)) {
      alert("Маҳсулот аллакай дар wishlist ҳаст!");
      return;
    }
    const updatedWishlist = [...wishlist, item];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const listRef = useRef(null);

  const scrollLeft = () => {
    listRef.current.scrollBy({
      left: -300, // чанд px ба чап
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({
      left: 300, // чанд px ба рост
      behavior: "smooth",
    });
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2025-08-25T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      const days = Math.floor(distance / (10000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

   const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'finish bay!',
        duration: 2,
      });
    }, 1000);
  };

  return (
    <>
      <div className="mt-40 flex items-start  justify-around">
        <div className="w-[25%] text-xl   p-[0px_30px] text-start">
          <select name="" id="">
            <option value="">Woman’s Fashion</option>
          </select>
          <br /> <br />
          <select name="" id="">
            <option value="">Men’s Fashion</option>
          </select>{" "}
          <br /> <br />
          <h2>Electronics</h2> <br />
          <h2>Home & Lifestyle</h2> <br />
          <h2>Medicine</h2> <br />
          <h2>Sports & Outdoor</h2> <br />
          <h2>Baby’s & Toys</h2> <br />
          <h2>Groceries & Pets</h2> <br />
          <h2>Health & Beauty</h2> <br />
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-around p-[20px_30px] text-start items-center bg-black  text-white">
              <div>
                <h1 className="flex items-center gap-5">
                  <img className="w-[50px]" src={img1} alt="" />
                  iPhone 14 Series
                </h1>{" "}
                <br />
                <h1 className="text-6xl">
                  Up to 10% <br /> off Voucher
                </h1>{" "}
                <br />
                <Button
                  sx={{ borderBottom: "1px solid white", color: "white" }}
                >
                  Shop Now <EastIcon />{" "}
                </Button>
              </div>

              <img className="w-[60%]" src={img2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-around p-[20px_30px] text-start items-center bg-black  text-white">
              <div>
                <h1 className="flex items-center gap-5">
                  <img className="w-[50px]" src={img1} alt="" />
                  iPhone 14 Series
                </h1>{" "}
                <br />
                <h1 className="text-6xl">
                  Up to 10% <br /> off Voucher
                </h1>{" "}
                <br />
                <Button
                  sx={{ borderBottom: "1px solid white", color: "white" }}
                >
                  Shop Now <EastIcon />{" "}
                </Button>
              </div>

              <img className="w-[60%]" src={img2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-around p-[20px_30px] text-start items-center bg-black  text-white">
              <div>
                <h1 className="flex items-center gap-5">
                  <img className="w-[50px]" src={img1} alt="" />
                  iPhone 14 Series
                </h1>{" "}
                <br />
                <h1 className="text-6xl">
                  Up to 10% <br /> off Voucher
                </h1>{" "}
                <br />
                <Button
                  sx={{ borderBottom: "1px solid white", color: "white" }}
                >
                  Shop Now <EastIcon />{" "}
                </Button>
              </div>

              <img className="w-[60%]" src={img2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-around p-[20px_30px] text-start items-center bg-black  text-white">
              <div>
                <h1 className="flex items-center gap-5">
                  <img className="w-[50px]" src={img1} alt="" />
                  iPhone 14 Series
                </h1>{" "}
                <br />
                <h1 className="text-6xl">
                  Up to 10% <br /> off Voucher
                </h1>{" "}
                <br />
                <Button
                  sx={{ borderBottom: "1px solid white", color: "white" }}
                >
                  Shop Now <EastIcon />{" "}
                </Button>
              </div>

              <img className="w-[60%]" src={img2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-around p-[20px_30px] text-start items-center bg-black  text-white">
              <div>
                <h1 className="flex items-center gap-5">
                  <img className="w-[50px]" src={img1} alt="" />
                  iPhone 14 Series
                </h1>{" "}
                <br />
                <h1 className="text-6xl">
                  Up to 10% <br /> off Voucher
                </h1>{" "}
                <br />
                <Button
                  sx={{ borderBottom: "1px solid white", color: "white" }}
                >
                  Shop Now <EastIcon />{" "}
                </Button>
              </div>

              <img className="w-[60%]" src={img2} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-around p-[20px_30px] text-start items-center bg-black  text-white">
              <div>
                <h1 className="flex items-center gap-5">
                  <img className="w-[50px]" src={img1} alt="" />
                  iPhone 14 Series
                </h1>{" "}
                <br />
                <h1 className="text-6xl">
                  Up to 10% <br /> off Voucher
                </h1>{" "}
                <br />
                <Button
                  sx={{ borderBottom: "1px solid white", color: "white" }}
                >
                  Shop Now <EastIcon />{" "}
                </Button>
              </div>

              <img className="w-[60%]" src={img2} alt="" />
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>

      <div className="flex gap-5 items-center justify-around font-extrabold">
        <h2 className="text-2xl font-extrabold">Flash Sales</h2>
        <div className="flex justify-center items-center gap-6 text-center mr-140">
          <div>
            <p>Days</p>
            <h1 className="text-3xl">
              {" "}
              {String(timeLeft.days).padStart(2, "0")}{" "}
            </h1>
          </div>
          <div>
            <p>Hourse</p>
            <h1 className="text-3xl">
              : {String(timeLeft.hours).padStart(2, "0")}{" "}
            </h1>
          </div>
          <div>
            <p>Minutes</p>
            <h1 className="text-3xl">
              : {String(timeLeft.minutes).padStart(2, "0")}{" "}
            </h1>
          </div>
          <div>
            <p>Seconds</p>
            <h1 className="text-3xl">
              : {String(timeLeft.seconds).padStart(2, "0")}
            </h1>
          </div>
        </div>

        <div className="flex gap-2">
            <Button
              onClick={scrollLeft}
              sx={{
                borderRadius: "50%", // '55%' ҳам кор мекунад, лекин 50% ҳам зебо аст
                padding: "10px",
                minWidth: "40px",
                bgcolor: "#c5c2c2",
                "&:hover": {
                  bgcolor: "#b0aeae",
                },
              }}
            >
              <KeyboardBackspaceIcon />
            </Button>
            <Button
              onClick={scrollRight}
              sx={{
                borderRadius: "50%",
                padding: "10px",
                minWidth: "40px",
                bgcolor: "#c5c2c2",
                "&:hover": {
                  bgcolor: "#b0aeae",
                },
              }}
            >
              <EastIcon />
            </Button>
          </div>
      </div>

      <div
        ref={listRef}
        className="mt-6 w-[90%] mx-auto flex items-stretch overflow-x-auto gap-6 h-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300"
      >
        {products.map((el) => {
          return (
            <div
              key={el.id}
              className="min-w-[320px] max-w-[350px] flex flex-col bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
            >
              {/* --- Тасвир ва кнопкаҳои фаврӣ --- */}
              <div className="relative bg-gray-50 rounded-xl group overflow-hidden">
                {/* Скидка */}
                <p className="absolute z-30 top-2 left-2 text-sm font-medium text-white bg-red-500 px-3 py-1 rounded-full shadow">
                  {el.discountPrice}%
                </p>

                {/* Тасвир */}
                <img
                  className="w-full h-[200px] object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  src={`http://37.27.29.18:8002/images/${el.image}`}
                  alt={el.productName}
                />

                {/* Кнопкаҳои wishlist ва view */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    onClick={() => addToWishlist(el)}
                    sx={{
                      borderRadius: "50%",
                      minWidth: "40px",
                      width: "40px",
                      height: "40px",
                      bgcolor: "white",
                      color: "black",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                    }}
                  >
                    {wishlist.some((i) => i.id === el.id) ? (
                      <FavoriteIcon sx={{ fontSize: "20px", color: "red" }} />
                    ) : (
                      <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
                    )}
                  </Button>

                  <Link to={`info/${el.id}`}>
                    <Button
                      sx={{
                        borderRadius: "50%",
                        minWidth: "40px",
                        width: "40px",
                        height: "40px",
                        bgcolor: "white",
                        color: "black",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                      }}
                    >
                      <VisibilityIcon />
                    </Button>
                  </Link>
                </div>

                {/* Add to Cart */}
                {contextHolder}
                <button
                  onClick={() => {
                    dispatch(PostCard(el.id))
                    openMessage()
                  }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-3 w-[85%] py-2 bg-black text-white rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingCartIcon fontSize="small" />
                  Add To Cart
                </button>
              </div>

              {/* --- Матн --- */}
              <div className="mt-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {el.productName}
                </h2>
                <p className="text-xl font-bold text-black mt-2">
                  $ {el.price}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  ⭐⭐⭐⭐⭐ <span className="text-gray-400">(88)</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-20">
        <Link to="product">
          <Button
            sx={{ bgcolor: "#DB4444", color: "white", padding: "10px 20px" }}
          >
            All product
          </Button>
        </Link>
      </div>

      <div>
        <div className="flex justify-between items-center p-20 pr-[150px] mt-12">
          <h1 className="text-2xl font-extrabold">Browse By Category</h1>
          <div className="flex gap-2">
            <Button
              onClick={scrollLeft}
              sx={{
                borderRadius: "50%", // '55%' ҳам кор мекунад, лекин 50% ҳам зебо аст
                padding: "10px",
                minWidth: "40px",
                bgcolor: "#c5c2c2",
                "&:hover": {
                  bgcolor: "#b0aeae",
                },
              }}
            >
              <KeyboardBackspaceIcon />
            </Button>
            <Button
              onClick={scrollRight}
              sx={{
                borderRadius: "50%",
                padding: "10px",
                minWidth: "40px",
                bgcolor: "#c5c2c2",
                "&:hover": {
                  bgcolor: "#b0aeae",
                },
              }}
            >
              <EastIcon />
            </Button>
          </div>
        </div>

        <div
          ref={listRef}
          className="w-[90%] mx-auto flex items-center gap-6 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 py-3"
        >
          {categoryes.slice(0, 6).map((el) => {
            return (
              <div
                key={el.id}
                className="min-w-[170px] dark:bg-gray-600 dark:text-white min-h-[145px] border border-gray-300 text-center flex flex-col justify-center items-center gap-2 rounded-lg bg-white hover:bg-red-400 hover:text-white hover:scale-105 transition duration-300 shadow-sm"
              >
                <img
                  src={`http://37.27.29.18:8002/images/${el.categoryImage}`}
                  alt={el.categoryName}
                  className="w-[80px] h-[80px] object-contain"
                />
                <h2 className="text-[18px] font-medium">{el.categoryName}</h2>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex  justify-between items-end p-[80px] mt-[50px]">
        <h1 className="text-2xl font-extrabold">Best Selling Products</h1>
        <Button
          sx={{ bgcolor: "#DB4444", color: "white", padding: "10px 20px" }}
        >
          View All
        </Button>
      </div>

      <div
        ref={listRef}
        className="mt-6 w-[90%] mx-auto flex items-stretch overflow-x-auto gap-6 h-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300"
      >
        {products.map((el) => {
          return (
            <div
              key={el.id}
              className="min-w-[320px] max-w-[350px] flex flex-col bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
            >
              {/* --- Тасвир ва кнопкаҳои фаврӣ --- */}
              <div className="relative bg-gray-50 rounded-xl group overflow-hidden">
                {/* Скидка */}
                <p className="absolute top-2 z-30 left-2 text-sm font-medium text-white bg-red-500 px-3 py-1 rounded-full shadow">
                  {el.discountPrice}%
                </p>

                {/* Тасвир */}
                <img
                  className="w-full h-[200px] object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  src={`http://37.27.29.18:8002/images/${el.image}`}
                  alt={el.productName}
                />

                {/* Кнопкаҳои wishlist ва view */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    onClick={() => addToWishlist(el)}
                    sx={{
                      borderRadius: "50%",
                      minWidth: "40px",
                      width: "40px",
                      height: "40px",
                      bgcolor: "white",
                      color: "black",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                    }}
                  >
                    {wishlist.some((i) => i.id === el.id) ? (
                      <FavoriteIcon sx={{ fontSize: "20px", color: "red" }} />
                    ) : (
                      <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
                    )}
                  </Button>

                  <Link to={`info/${el.id}`}>
                    <Button
                      sx={{
                        borderRadius: "50%",
                        minWidth: "40px",
                        width: "40px",
                        height: "40px",
                        bgcolor: "white",
                        color: "black",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                      }}
                    >
                      <VisibilityIcon />
                    </Button>
                  </Link>
                </div>

                {/* Add to Cart */}
                <button
                   onClick={() => {
                    dispatch(PostCard(el.id))
                    openMessage()
                  }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-3 w-[85%] py-2 bg-black text-white rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingCartIcon fontSize="small" />
                  Add To Cart
                </button>
              </div>

              {/* --- Матн --- */}
              <div className="mt-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {el.productName}
                </h2>
                <p className="text-xl font-bold text-black mt-2">
                  $ {el.price}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  ⭐⭐⭐⭐⭐ <span className="text-gray-400">(88)</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-black w-[95%] mt-[100px] m-auto text-white flex justify-around">
        <div className=" p-[20px] flex flex-col justify-center items-start gap-4 ">
          <p className="text-[#00FF66]">Categories</p> <br />
          <h1 className="text-6xl">
            Enhance Your <br /> Music Experience
          </h1>{" "}
          <br />
          <div className="flex justify-center items-center gap-6 text-center">
            <div className="bg-white text-black rounded-[55%] p-[10px_20px]">
              <p>Days</p>
              <h1 className="text-3xl">
                {" "}
                {String(timeLeft.days).padStart(2, "0")}{" "}
              </h1>
            </div>
            <div className="bg-white text-black rounded-[55%] p-[10px_20px]">
              <p>Hourse</p>
              <h1 className="text-3xl">
                : {String(timeLeft.hours).padStart(2, "0")}{" "}
              </h1>
            </div>
            <div className="bg-white text-black rounded-[55%] p-[10px_20px]">
              <p>Minutes</p>
              <h1 className="text-3xl">
                : {String(timeLeft.minutes).padStart(2, "0")}{" "}
              </h1>
            </div>
            <div className="bg-white text-black rounded-[55%] p-[10px_20px]">
              <p>Seconds</p>
              <h1 className="text-3xl">
                : {String(timeLeft.seconds).padStart(2, "0")}
              </h1>
            </div>
          </div>{" "}
          <br />
          <Button sx={{ padding: "10px 30px", bgcolor: "#00FF66" }}>
            Buy Now!
          </Button>
        </div>
        <img className="w-[55%]" src={img11} alt="" />
      </div>

      <div className=" mt-[100px] pl-[80px]">
        <h1 className="text-3xl font-extrabold">Explore Our Products</h1>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-[20px] w-[95%] m-auto mt-[100px]">
        {products.map((el) => {
          return (
            <div
              key={el.id}
              className="min-w-[320px] max-w-[350px] flex flex-col bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
            >
              {/* --- Тасвир ва кнопкаҳои фаврӣ --- */}
              <div className="relative bg-gray-50 rounded-xl group overflow-hidden">
                {/* Скидка */}
                <p className="absolute z-30 top-2 left-2 text-sm font-medium text-white bg-red-500 px-3 py-1 rounded-full shadow">
                  {el.discountPrice}%
                </p>

                {/* Тасвир */}
                <img
                  className="w-full h-[200px] object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  src={`http://37.27.29.18:8002/images/${el.image}`}
                  alt={el.productName}
                />

                {/* Кнопкаҳои wishlist ва view */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    onClick={() => addToWishlist(el)}
                    sx={{
                      borderRadius: "50%",
                      minWidth: "40px",
                      width: "40px",
                      height: "40px",
                      bgcolor: "white",
                      color: "black",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                    }}
                  >
                    {wishlist.some((i) => i.id === el.id) ? (
                      <FavoriteIcon sx={{ fontSize: "20px", color: "red" }} />
                    ) : (
                      <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
                    )}
                  </Button>

                  <Link to={`info/${el.id}`}>
                    <Button
                      sx={{
                        borderRadius: "50%",
                        minWidth: "40px",
                        width: "40px",
                        height: "40px",
                        bgcolor: "white",
                        color: "black",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                      }}
                    >
                      <VisibilityIcon />
                    </Button>
                  </Link>
                </div>

                {/* Add to Cart */}
                <button
                   onClick={() => {
                    dispatch(PostCard(el.id))
                    openMessage()
                  }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-3 w-[85%] py-2 bg-black text-white rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingCartIcon fontSize="small" />
                  Add To Cart
                </button>
              </div>

              {/* --- Матн --- */}
              <div className="mt-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {el.productName}
                </h2>
                <p className="text-xl font-bold text-black mt-2">
                  $ {el.price}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  ⭐⭐⭐⭐⭐ <span className="text-gray-400">(88)</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-20">
        <Link to="product">
          <Button
            sx={{ bgcolor: "#DB4444", color: "white", padding: "10px 30px" }}
          >
            View All Products
          </Button>
        </Link>
      </div>

      <div className="p-[80px]">
        <h1 className="text-3xl font-extrabold">New Arrival</h1> <br />
        <br />
        <div className="flex w-[95%] gap-[10px]">
          <div className="bg-black text-white w-[650px] h-[600px] p-[30px_20px_0px_20px]">
            <img className="w-[100%] h-[100%]" src={img20} alt="" />
            <div className="relative z-20 top-[-200px] left-[40px] ">
              <h2 className="text-2xl">PlayStation 5</h2> <br />
              <p>
                Black and White version of the PS5 <br /> coming out on sale.
              </p>{" "}
              <br />
              <button className="border-b">Shop Now</button> <br />
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center justify-between bg-black text-white h-[300px]">
              <div className="relative  left-[100px] z-100">
                <h2 className="text-xl  focus-visible:">Women’s Collections</h2>{" "}
                <br />
                <p>
                  Featured woman collections that <br /> give you another vibe.
                </p>{" "}
                <br />
                <button className="border-b">Shop Now</button>
              </div>
              <img
                className="h-[100%] w-[50%] relative z-10"
                src={img21}
                alt=""
              />
            </div>

            <div className="flex justify-between gap-[10px] h-[290px]">
              <div className="bg-black text-white w-[50%] p-[10px]">
                <img className=" w-[100%] relative z-10" src={img22} alt="" />
                <div className="relative bottom-[100px] z-20">
                  <h2 className="text-xl">Speakers</h2>
                  <p>Amazon wireless speakers</p>
                  <button className="border-b"> Shop Now</button>
                </div>
              </div>
              <div className="bg-black text-white w-[50%] p-[10px]">
                <img className="relative w-[100%] z-10" src={img23} alt="" />
                <div className="relative bottom-[100px] z-30">
                  <h2 className="text-xl">Speakers</h2>
                  <p>Amazon wireless speakers</p>
                  <button className="border-b"> Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around items-center">
        <div className="text-center flex flex-col gap-[15px] justify-center items-center">
          <LocalShippingIcon
            sx={{
              bgcolor: "black",
              color: "white",
              padding: "5px",
              width: "50px",
              height: "50px",
              borderRadius: "55%",
            }}
          />
          <h3 className="text-xl">FREE AND FAST DELIVERY</h3>
          <p className="text-gray-500">
            Free delivery for all orders over $140
          </p>
        </div>

        <div className="text-center flex flex-col gap-[15px] justify-center items-center">
          <SupportAgentIcon
            sx={{
              bgcolor: "black",
              color: "white",
              padding: "5px",
              width: "50px",
              height: "50px",
              borderRadius: "55%",
            }}
          />
          <h3 className="text-xl">24/7 CUSTOMER SERVICE</h3>
          <p className="text-gray-500">Friendly 24/7 customer support</p>
        </div>

        <div className="text-center flex flex-col gap-[15px] justify-center items-center">
          <ShieldIcon
            sx={{
              bgcolor: "black",
              color: "white",
              padding: "5px",
              width: "50px",
              height: "50px",
              borderRadius: "55%",
            }}
          />
          <h3 className="text-xl">MONEY BACK GUARANTEE</h3>
          <p className="text-gray-500">We reurn money within 30 days</p>
        </div>
      </div>
    </>
  );
};

export default Home;
