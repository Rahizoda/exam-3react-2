import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  GetById, GetProducts, PostCard } from "../../dataServer/TodoApi";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CachedIcon from "@mui/icons-material/Cached";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Info = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, byId } = useSelector((state) => state.data);
  const products = data?.data?.products || [];

  const [wishlist, setWishlist] = useState([]);
  
    useEffect(() => {
      const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlist(savedWishlist);
    }, []);
  
    const addToWishlist = (item) => {
      if (wishlist.find((i) => i.id === item.id)) {
        alert("Маҳсулот аллакай дар wishlist ҳаст!");
        return;
      }
      const updatedWishlist = [...wishlist, item];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };

  useEffect(() => {
    dispatch(GetById(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);
  return (
    <>
      <div className="mt-[100px] flex justify-around items-center w-[100%]">
        {byId.images?.slice(0 , 1).map((el) => {
          return (
            <img
              className="w-[500px] h-[500px]"
              src={`http://37.27.29.18:8002/images/${el.images}`}
              alt=""
            />
          );
        })}

        <div className="w-[40%]">
          <h1 className="mt-[100px] text-3xl">{byId.productName}</h1> <br />
          <h2>
            ⭐⭐⭐⭐⭐ <span className="text-gray-400">({byId.quantity})</span>
          </h2>{" "}
          <br />
          <h2 className="text-2xl">$ {byId.price} </h2> <br />
          <p>
            PlayStation 5 Controller Skin High quality vinyl with air <br />
            channel adhesive for easy bubble free install & mess free <br />
            removal Pressure sensitive.
          </p>{" "}
          <br /> <hr /> <br />
          <div className="flex justify-between gap-3 items-center">
            <h2 className="text-xl">Size: </h2>
            <Button
              variant="outlined"
              sx={{ border: "1px solid black", color: "black" }}
            >
              xs
            </Button>
            <Button sx={{ border: "1px solid black", color: "black" }}>
              s
            </Button>
            <Button sx={{ border: "1px solid black", color: "black" }}>
              l
            </Button>
            <Button sx={{ border: "1px solid black", color: "black" }}>
              m
            </Button>
            <Button sx={{ border: "1px solid black", color: "black" }}>
              xl
            </Button>
          </div>
          <div className="flex  items-center gap-3 border p-[20px]  rounded-[5px] mt-[30px] w-[100%]">
            <LocalShippingIcon sx={{ fontSize: "40px" }} />
            <div>
              <h2>Free Delivery</h2>
              <p className="">
                Enter your postal code for Delivery Availability
              </p>
              <hr />
            </div>
          </div>
          <div className="flex  items-center gap-3 border p-[20px]  rounded-[5px] mt-[30px] w-[100%]">
            <CachedIcon sx={{ fontSize: "40px" }} />
            <div>
              <h2>Return Delivery</h2>
              <p className="">Free 30 Days Delivery Returns. Details</p>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-[95%] justify-around gap-5 m-auto mt-[100px] items-center">
        {products.map((el) => {
          return (
            <div
              key={el.id}
              className="w-[280px] max-w-[350px] flex flex-col bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
            >
              {/* --- Тасвир ва кнопкаҳои фаврӣ --- */}
              <div className="relative bg-gray-50 rounded-xl group overflow-hidden">
                {/* Скидка */}
                <p className="absolute z-30 top-2 left-2 text-sm font-medium text-white bg-red-500 px-3 py-1 rounded-full shadow">
                  {el.discountPrice}%
                </p>

                {/* Тасвир */}
                <img
                  className="w-full mix-blend-multiply h-[200px] object-contain p-4 transition-transform duration-500 group-hover:scale-105"
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

                    <Button
                    onClick={() => {
                      dispatch(GetById(el.id))
                    }}
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
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() => dispatch(PostCard(el.id))}
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
    </>
  );
};

export default Info;
