import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, GetById, GetProducts } from "../../dataServer/TodoApi";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CachedIcon from "@mui/icons-material/Cached";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Info = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
    const { data, byId } = useSelector((state) => state.data);
  const products = data?.data?.products || []
    

  useEffect(() => {
    dispatch(GetById(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);
  return (
    <>
      <div className="mt-[100px] flex justify-around items-center w-[100%]">
        {byId.images?.map((el) => {
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

      <div className="flex flex-wrap w-[95%] gap-5 m-auto mt-[100px] items-center">
        {products.map((el) => {
          return (
            <div
              key={el.id}
              className="min-w-[300px] min:h-[350px] p-[20px] border border-gray-300 rounded-[10px] "
            >
              <div className="bg-blue-50  relative p-4  rounded-lg group">
                <p className="text-white bg-red-400 p-[5px_15px] w-[70px] rounded-xl">
                  {el.discountPrice} %
                </p>
                <div className="flex w-[200px]">
                  <img
                    className="bg-blue-50 p-[20px] w-[300px] h-[180px]"
                    src={`http://37.27.29.18:8002/images/${el.image}`}
                    alt=""
                  />{" "}
                  <br /> <br />
                  <div className="flex flex-col w-[30px] relative bottom-[40px] text-[10px]">
                    <Button
                      onClick={() => dispatch(addToWishlist(el))}
                      sx={{
                        borderRadius: "55%",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        bgcolor: "white",
                        color: "black",
                        fontSize: "10px",
                      }}
                    >
                      <FavoriteBorderIcon sx={{ fontSize: "19px" }} />
                    </Button>
                    
                      <Button
                      onClick={()=>dispatch(GetById(el.id))}
                        sx={{
                          borderRadius: "55%",
                          padding: "15px 0px",
                          bgcolor: "white",
                          color: "black",
                        }}
                      >
                        <VisibilityIcon />
                      </Button>
                  </div>
                </div>
                <button
                  className="absolute left-1/2 -translate-x-1/2 bottom-1 w-[100%] py-2 bg-black text-white rounded
                opacity-0 group-hover:opacity-100 transition"
                >
                  Add To Cart
                </button>
              </div>{" "}
              <br />
              <h2 className="text-xl">{el.productName}</h2>
              <br />
              <p>$ {el.price} </p>
              <p>
                ⭐⭐⭐⭐⭐ <span className="text-gray-500">(88)</span>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Info;
