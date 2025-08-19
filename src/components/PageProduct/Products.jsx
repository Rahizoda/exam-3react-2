import React, { useEffect, useState } from "react";
import { TreeSelect } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, GetProducts } from "../../dataServer/TodoApi";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";

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
    children:[
        {
        title: "See all",
        value: "0-0-6",
      },
    ]
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
  const product = data?.data?.products || [];
  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);

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
           <br /><br /> <hr /><br /> 
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
          /> <br /> <br /> <hr /> <br />
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
          /> <br /> <br /> <hr /> <br />
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
          /> <br /> <br /> <hr /> <br />
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
          /> <br /> <br /> <hr /> <br />
        </div>

        <div className="flex flex-wrap  w-[70%] justify-around items-start gap-2">
          {product.map((el) => {
            return (
              <div
                key={el.id}
                className="min-w-[300px] min:h-[400px] p-[20px]  rounded-[10px] "
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
      </div>
    </>
  );
};

export default Products;
