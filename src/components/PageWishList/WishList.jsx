import { Button } from "@mui/material";
import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
// import { removeFromWishlist } from "../../dataServer/TodoApi";
import VisibilityIcon from "@mui/icons-material/Visibility";

const WishList = () => {
  // const dispatch = useDispatch();
  // const wishlist = useSelector((state) => state.data.wishlist);
  const wishlist = React.useMemo(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  }, []);
  function DeleteItem(id) {
    let updatedWishlist = JSON.stringify(wishlist.filter((el) => el.id != id));
    localStorage.setItem("wishlist", updatedWishlist);
  }
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <>
      <div className="flex mt-[100px] justify-between p-[30px_50px] items-center">
        <h2 className=" ml-[50px] text-2xl">Wishlist ({wishlist.length})</h2>
        <Button sx={{ border: "1px solid black", color: "black" }}>
          Move All To Bag
        </Button>
      </div>
      <div className="mt-24 flex flex-col md:flex-row flex-wrap justify-center gap-6 w-[90%] m-auto">
        {wishlist?.map((el) => (
          <div
            key={el.id}
            className="min-w-[280px] max-w-[320px] bg-white rounded-2xl shadow-md p-4 group relative"
          >
            {/* Card Top: Image + Discount + Delete Button */}
            <div className="relative bg-blue-50 rounded-lg overflow-hidden">
              {/* Discount Badge */}
              {el.discountPrice && (
                <p className="absolute top-2 z-30 left-2 text-white bg-red-500 px-3 py-1 rounded-full text-sm font-medium shadow">
                  {el.discountPrice}%
                </p>
              )}

              {/* Product Image */}
              <img
                className="w-full h-[180px] object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                src={`http://37.27.29.18:8002/images/${el.image}`}
                alt={el.productName}
              />

              {/* Delete Button */}
              <div className="absolute top-2 right-2">
                <Button
                  onClick={() => DeleteItem(el.id)}
                  sx={{
                    borderRadius: "50%",
                    width: "35px",
                    height: "35px",
                    minWidth: "35px",
                    bgcolor: "white",
                    color: "black",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                  }}
                >
                  <ClearIcon sx={{ fontSize: "18px" }} />
                </Button>
              </div>

              {/* Add To Cart Button */}
              <button className="absolute left-1/2 -translate-x-1/2 bottom-3 w-[90%] py-2 bg-black text-white rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-2">
                Add To Cart
              </button>
            </div>

            {/* Product Info */}
            <div className="mt-4 flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {el.productName}
              </h2>
              <p className="text-xl font-bold text-black mt-2">${el.price}</p>
              <p className="text-sm text-gray-500 mt-1">
                ⭐⭐⭐⭐⭐ <span className="text-gray-400">(88)</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex  mt-[100px] justify-between p-[10px_50px] items-center">
        <h2 className=" ml-[50px] text-2xl">Just For You </h2>
        <Button sx={{ border: "1px solid black", color: "black" }}>
          See All
        </Button>
      </div>

      <div className="mt-24 flex flex-col md:flex-row flex-wrap justify-center gap-6 w-[90%] m-auto">
        {wishlist.map((el) => (
          <div
            key={el.id}
            className="min-w-[280px] max-w-[320px] bg-white rounded-2xl shadow-md p-4 group relative"
          >
            <div className="relative bg-blue-50 rounded-lg overflow-hidden">
              {el.discountPrice && (
                <p className="absolute top-2 left-2 text-white bg-red-500 px-3 py-1 rounded-full text-sm font-medium shadow">
                  {el.discountPrice}%
                </p>
              )}

              <img
                className="w-full h-[180px] object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                src={`http://37.27.29.18:8002/images/${el.image}`}
                alt={el.productName}
              />

              <div className="absolute top-2 right-2">
                <Button
                  sx={{
                    borderRadius: "50%",
                    width: "35px",
                    height: "35px",
                    minWidth: "35px",
                    bgcolor: "white",
                    color: "black",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                  }}
                >
                  <VisibilityIcon sx={{ fontSize: "18px" }} />
                </Button>
              </div>

              {/* Add To Cart Button */}
              <button  className="absolute left-1/2 -translate-x-1/2 bottom-3 w-[90%] py-2 bg-black text-white rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-2">
                Add To Cart
              </button>
            </div>

            {/* Product Info */}
            <div className="mt-4 flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {el.productName}
              </h2>
              <p className="text-xl font-bold text-black mt-2">${el.price}</p>
              <p className="text-sm text-gray-500 mt-1">
                ⭐⭐⭐⭐⭐ <span className="text-gray-400">(88)</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WishList;
