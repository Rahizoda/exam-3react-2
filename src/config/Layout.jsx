import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import img1 from "../assets/Group 1116606595.png";
import Switch from "./Swicher";
import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useDispatch, useSelector } from "react-redux";
import { GetBasket, Profile } from "../dataServer/TodoApi";

const Layout = () => {
  const [open, setOpen] = useState();
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.data);
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      dispatch(GetBasket());
    }
  }, [dispatch]);

  const totalQuantity = basket?.reduce((acc, cart) => {
    return acc + cart.productsInCart?.reduce((sum) => sum + 1, 0);
  }, 0);
  return (
    <div>
      <nav className="flex justify-around items-center p-[20px_0px] bg-white text-black dark:bg-[#100924] dark:text-white fixed top-0 left-0 w-[100%] z-50">
        <img className="w-[150px] hidden md:inline " src={img1} alt="" />
        <div className="flex items-center gap-3 md:hidden ">
          <ViewWeekIcon />
          <h1 className="text-2xl font-black">Exclusive</h1>
        </div>
        <div className="md:flex items-center hidden cursor-pointer gap-5">
          <Link to="/">Home</Link>
          <Link to="contact">Contact</Link>
          <Link to="singup">Sign Up</Link>
          <Link to="about">About</Link>
        </div>

        <div className="md:flex gap-5 items-center hidden  text-2xl">
          <TextField
            sx={{ width: "250px" }}
            id="standard-basic"
            label="What are you looking for?"
            variant="filled"
          />
          <SearchIcon sx={{ fontSize: "30px" }} />
          <p className="absolute top-[27px] text-[12px] p-[3px_6px] rounded-[55%] left-[993px] bg-red-400 text-white">
            {wishlist.length}
          </p>
          <Link to="wishlist">
            <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
          </Link>
          <p className="absolute top-[27px] text-[12px] p-[3px_6px] rounded-[55%] left-[1040px] bg-red-400 text-white">
            {totalQuantity}
          </p>
          <Link to="bascet">
            <ShoppingCartIcon sx={{ fontSize: "30px" }} />
          </Link>
          <Button
            onClick={() => setOpen(!open)}
            className="dark:!text-white !text-black"
          >
            <AccountCircleIcon sx={{ fontSize: "30px" }} />
          </Button>

          {open && (
            <div className="absolute right-0 md:right-[250px] top-[80px] mt-2 w-44 bg-black/60 text-white rounded-lg shadow-lg p-4 space-y-3 backdrop-blur-sm z-50 transition-all duration-300">
              <button
                onClick={() => {
                  dispatch(Profile());
                  window.location.href = "/account";
                }}
                className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded transition-colors duration-200"
              >
                <AccountCircleIcon fontSize="small" />
                <span className="text-sm">Account</span>
              </button>

              <button className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded transition-colors duration-200">
                <ShoppingBagIcon fontSize="small" />
                <span className="text-sm">My Orders</span>
              </button>

              <button
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  window.location.href = "/";
                }}
                className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded transition-colors duration-200"
              >
                <LogoutIcon fontSize="small" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          )}
        </div>
        <Switch />
      </nav>

      <main className="overflow-hidden">
        <Outlet />
      </main>

      <footer className="flex items-start flex-wrap md:flex-row mt-[150px] justify-around bg-black text-white p-[100px_0px]">
        <div className="w-[90%] md:w-auto">
          <h2 className="text-2xl ">Exclusive</h2> <br />
          <h2>Subscribe</h2> <br />
          <p>Get 10% off your first order</p> <br />
          <div className="flex items-center ">
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                },
                input: { color: "white" },
                "& label": { color: "white" },
              }}
              label="Enter your email"
            />
            <Button variant="outlined" sx={{ padding: "15px" }}>
              <SendIcon />
            </Button>
          </div>
        </div>

        <div className="w-[90%] md:w-auto mt-10 md:mt-0">
          <h2 className="text-2xl">Support</h2> <br />
          <h3>
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </h3>{" "}
          <br />
          <p>exclusive@gmail.com</p> <br />
          <p>+88015-88888-9999</p> <br />
        </div>

        <div className="w-[45%] md:w-auto mt-10 md:mt-0">
          <h2 className="text-2xl">Account</h2> <br />
          <p>My Account</p>
          <br />
          <p>Cart</p>
          <br />
          <p>Wishlist</p> <br />
          <p>Shop</p>
          <br />
        </div>

        <div className="w-[45%] mt-10 md:mt-0 md:w-auto">
          <h2 className="text-2xl">Quick Link</h2> <br />
          <p>Privacy Policy</p> <br />
          <p>Terms Of Use</p> <br />
          <p>FAQ</p> <br />
          <p>Contact</p> <br />
        </div>

        <div className="w-[90%] md:w-auto mt-10 md:mt-0">
          <h2 className="text-2xl ">Social</h2> <br />
          <div className="flex gap-2">
            {" "}
            <br />
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </footer>

      <h2 className="bg-black text-gray-600 p-[20px] text-center ">
        Copyright Rimel 2022. All right reserved
      </h2>
    </div>
  );
};

export default Layout;
