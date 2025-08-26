import React, { useEffect, useState } from "react";
import { TreeSelect } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GetCategory, GetProducts, PostCard } from "../../dataServer/TodoApi";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Products = () => {
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

  const [cate, setCate] = useState(null);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(999999);

  const handleMinChange = (e) => {
    const val = +e.target.value;
     setMin(val);
  };

  const handleMaxChange = (e) => {
    const val = +e.target.value;
     setMax(val);
  };

 
  return (
    <>
      <p className="text-xl mt-[100px] ml-[50px]">
        <span className="text-gray-400">Home \ </span> Explore Our Products
      </p>

      <div className="flex w-[100%] justify-around mt-[100px]">
        <div className="w-[20%]">
          <h1 className="text-2xl font-extrabold">Categories</h1> <br />
          <br />
          <select
            onChange={(e) => setCate(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
          >
            <option value="all">All Products</option>
            {categoryes.slice(0, 6).map((el, i) => (
              <option key={i} value={el.id} className="text-gray-700 p-2">
                {el.categoryName}
              </option>
            ))}
          </select>
          <div className="p-4 mt-[50px] rounded shadow-sm w-[300px]">
            <h2 className="font-bold text-2xl mb-[50px]">Price range</h2>

            <div className="relative w-full h-2 bg-gray-300 rounded mb-4">
              <div
                className="absolute h-2 bg-red-500 rounded"
                style={{
                  left: `${(min / 999999) * 100}%`,
                  right: `${100 - (max / 999999) * 100}%`,
                }}
              />
              <input
                type="range"
                min="0"
                max="999999"
                value={min}
                onChange={(e) => setMin(+e.target.value)}
                className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none"
              />
              <input
                type="range"
                min="0"
                max="999999"
                value={max}
                onChange={(e) => setMax(+e.target.value)}
                className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none"
              />
            </div>

            <div className="flex justify-between mb-4 gap-2">
              <input
                type="text"
                value={min}
                onChange={handleMinChange}
                className="w-1/2 p-2 border border-gray-300 rounded text-center"
              />
              <input
                type="text"
                value={max}
                onChange={handleMaxChange}
                className="w-1/2 p-2 border border-gray-300 rounded text-center"
              />
            </div>

            {/* Apply button */}
            <button
              className="w-full py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
            >
              Apply
            </button>
          </div>
        </div>

        <div className="flex flex-wrap overflow-y-auto h-[70vh] w-full md:w-[70%] justify-start md:justify-around items-start gap-4">
          {products
            .filter((e)=> e.price >= min && e.price <= max)
            .filter((e) => (cate == "all" ? e : e.categoryId == cate))
            .map((el) => (
              <div
                key={el.id}
                className=" max-w-[290px] max-h-[350px]  flex flex-col bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 group"
              >
                <div className="relative bg-gray-50 rounded-xl overflow-hidden">
                  {el.discountPrice && (
                    <p className="absolute top-2 left-2 z-30 text-sm font-medium text-white bg-red-500 px-3 py-1 rounded-full shadow">
                      {el.discountPrice}%
                    </p>
                  )}

                  <img
                    className="w-full h-[200px] object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    src={`http://37.27.29.18:8002/images/${el.image}`}
                    alt={el.productName}
                  />

                  {/* Wishlist & View Buttons */}
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
                    onClick={() => dispatch(PostCard(el.id))}
                    className="absolute left-1/2 -translate-x-1/2 bottom-3 w-[85%] py-2 bg-black text-white rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingCartIcon fontSize="small" />
                    Add To Cart
                  </button>
                </div>

                <div className="mt-4 flex flex-col flex-grow">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {el.productName}
                  </h2>
                  <p className="text-xl font-bold text-black mt-2">
                    ${el.price}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    ⭐⭐⭐⭐⭐ <span className="text-gray-400">(88)</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
