import React, { useEffect, useState } from "react";
import { TreeSelect } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts, PostCard } from "../../dataServer/TodoApi";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

const treeData = [
  {
    title: "Category",
    value: "0-0",
    children: [
      {
        title: "All products",
        value: "0-0-1",
      },
      {
        title: "Electronics",
        value: "0-0-2",
      },
      {
        title: "Home & Lifestyle",
        value: "0-0-3",
      },
      {
        title: "Medicine",
        value: "0-0-4",
      },
      {
        title: "Sports & Outdoor",
        value: "0-0-5",
      },
      {
        title: "See all",
        value: "0-0-6",
      },
    ],
  },
  {
    title: "Node2",
    value: "0-1",
    children: [
      {
        title: "See all",
        value: "0-0-6",
      },
    ],
  },
];

const forData = [
  {
    title: "Brands",
    value: "0-0",
    children: [
      {
        title: "Samsung",
        value: "0-0-1",
      },
      {
        title: "Apple",
        value: "0-0-2",
      },
      {
        title: "Huawei",
        value: "0-0-3",
      },
      {
        title: "Pocco",
        value: "0-0-4",
      },
      {
        title: "Lenovo",
        value: "0-0-5",
      },
      {
        title: "See all",
        value: "0-0-6",
      },
    ],
  },
];

const fiveData = [
  {
    title: "Features",
    value: "0-0",
    children: [
      {
        title: "Metallic",
        value: "0-0-1",
      },
      {
        title: "Plastic cover",
        value: "0-0-2",
      },
      {
        title: "8GB Ram",
        value: "0-0-3",
      },
      {
        title: "Super power",
        value: "0-0-4",
      },
      {
        title: "Large Memory",
        value: "0-0-5",
      },
      {
        title: "See all",
        value: "0-0-6",
      },
    ],
  },
];

const sixData = [
  {
    title: "Condition",
    value: "0-0",
    children: [
      {
        title: "Any",
        value: "0-0-1",
      },
      {
        title: "Refurbished",
        value: "0-0-2",
      },
      {
        title: "Brand new",
        value: "0-0-3",
      },
      {
        title: "Old items",
        value: "0-0-4",
      },
    ],
  },
];

const sevenData = [
  {
    title: "Ratings",
    value: "0-0",
    children: [
      {
        title: "⭐⭐⭐⭐⭐",
        value: "0-0-1",
      },
      {
        title: "⭐⭐⭐⭐",
        value: "0-0-2",
      },
      {
        title: "⭐⭐⭐",
        value: "0-0-3",
      },
      {
        title: "⭐⭐",
        value: "0-0-4",
      },
      {
        title: "⭐",
        value: "0-0-4",
      },
    ],
  },
];
const Products = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  const products = data?.data?.products || [];
  useEffect(() => {
    dispatch(GetProducts());
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

  return (
    <>
      <p className="text-xl mt-[100px] ml-[50px]">
        <span className="text-gray-400">Home \ </span> Explore Our Products
      </p>

      <div className="flex w-[100%] justify-around mt-[100px]">
        <div className="w-[20%]">
          <TreeSelect
            style={{ width: "100%" }}
            value={value}
            styles={{
              popup: { root: { maxHeight: 400, overflow: "auto" } },
            }}
            treeData={treeData}
            placeholder="Please select"
            treeDefaultExpandAll
            onChange={onChange}
          />
          <br />
          <br /> <hr />
          <br />
          <TreeSelect
            style={{ width: "100%" }}
            value={value}
            styles={{
              popup: { root: { maxHeight: 400, overflow: "auto" } },
            }}
            treeData={forData}
            placeholder="Please select"
            treeDefaultExpandAll
            onChange={onChange}
          />{" "}
          <br /> <br /> <hr /> <br />
          <TreeSelect
            style={{ width: "100%" }}
            value={value}
            styles={{
              popup: { root: { maxHeight: 400, overflow: "auto" } },
            }}
            treeData={fiveData}
            placeholder="Please select"
            treeDefaultExpandAll
            onChange={onChange}
          />{" "}
          <br /> <br /> <hr /> <br />
          <TreeSelect
            style={{ width: "100%" }}
            value={value}
            styles={{
              popup: { root: { maxHeight: 400, overflow: "auto" } },
            }}
            treeData={sixData}
            placeholder="Please select"
            treeDefaultExpandAll
            onChange={onChange}
          />{" "}
          <br /> <br /> <hr /> <br />
          <TreeSelect
            style={{ width: "100%" }}
            value={value}
            styles={{
              popup: { root: { maxHeight: 400, overflow: "auto" } },
            }}
            treeData={sevenData}
            placeholder="Please select"
            treeDefaultExpandAll
            onChange={onChange}
          />{" "}
          <br /> <br /> <hr /> <br />
        </div>

        <div className="flex flex-wrap w-full md:w-[70%] justify-start md:justify-around items-start gap-4">
          {products.map((el) => (
            <div
              key={el.id}
              className="w-[290px] h-[350px]  flex flex-col bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 group"
            >
              {/* --- Image and Quick Actions --- */}
              <div className="relative bg-gray-50 rounded-xl overflow-hidden">
                {/* Discount Badge */}
                {el.discountPrice && (
                  <p className="absolute top-2 left-2 z-30 text-sm font-medium text-white bg-red-500 px-3 py-1 rounded-full shadow">
                    {el.discountPrice}%
                  </p>
                )}

                {/* Product Image */}
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

              {/* --- Product Info --- */}
              <div className="mt-4 flex flex-col flex-grow">
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
      </div>
    </>
  );
};

export default Products;
