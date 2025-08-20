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
  useEffect(()=>{
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
},[wishlist]);


  return (
    <>
      <div className="flex mt-[100px] justify-between p-[30px_50px] items-center">
        <h2 className=" ml-[50px] text-2xl">Wishlist ({wishlist.length})</h2>
        <Button sx={{ border: "1px solid black", color: "black" }}>
          Move All To Bag
        </Button>
      </div>
      <div className="mt-[100px] flex flex-col md:flex-row flex-wrap items-center w-[90%] m-auto ">
        {wishlist?.map((el) => {
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
                      onClick={() => {
                        console.log(el.id);
                        DeleteItem(el.id);
                      }}
                      sx={{
                        borderRadius: "55%",
                        padding: "15px 0px",
                        bgcolor: "white",
                        color: "black",
                      }}
                    >
                      <ClearIcon />
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

      <div className="flex  mt-[100px] justify-between p-[10px_50px] items-center">
        <h2 className=" ml-[50px] text-2xl">Just For You </h2>
        <Button sx={{ border: "1px solid black", color: "black" }}>
          See All
        </Button>
      </div>

      <div className="mt-[100px] flex flex-col md:flex-row flex-wrap items-center w-[90%] m-auto ">
        {wishlist.map((el) => {
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

export default WishList;
