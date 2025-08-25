import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ClearBasket,
  Decrement,
  DeleteProduct,
  GetBasket,
  Increment,
} from "../../dataServer/TodoApi";
import { Button, TextField } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link } from "react-router-dom";
const Bascet = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.data);
  const products = basket || [];
  console.log(products);

  useEffect(() => {
    dispatch(GetBasket());
  }, [dispatch]);

  const Total = basket?.reduce((total, cart) => {
    const cartTotal = cart.productsInCart.reduce(
      (sum, el) => sum + el.product.price * el.quantity,
      0
    );
    return total + cartTotal;
  }, 0);

  const subTotal = basket?.reduce((total, cart) => {
    const cartTotal = cart.productsInCart.reduce(
      (sum, el) => sum + el.product.price * el.quantity,
      0
    );
    return total + cartTotal;
  }, 0);

  return (
    <>
      <p className="text-2xl mt-[100px] ml-[50px]">
        <span className="text-gray-500">Nome \</span> Cart
      </p>

      <table className="w-[90%] m-auto ">
        <thead className="text-start w-[100%] h-[100px]">
          <tr className="text-gray-500 text-start">
            <th className="text-start p-[10px]">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody className="w-[100%]">
          {basket?.map((cart) =>
            cart.productsInCart.map((el) => (
              <>
                <tr className="shadow-[3px_5px_5px_gray] text-center border border-gray-400 mt-80 h-[90px] ">
                  <td className="flex items-center gap-3 p-[10px]">
                    <img
                      src={`http://37.27.29.18:8002/images/${el.product.image}`}
                      alt={el.product.productName}
                      className="w-[70px] h-[70px]"
                    />
                    <h1>{el.product.productName}</h1>
                  </td>

                  <td>
                    <p> $ {el.product.price}</p>
                  </td>
                  <td className="w-[50px]">
                    <div className="border border-gray-400 w-[63px] h-[50px] rounded-[4px] flex items-center p-[4px]">
                      <p>{el.quantity}</p>
                      <div>
                        <button onClick={() => dispatch(Increment(el.id))}>
                          <ExpandLessIcon />
                        </button>
                        <button onClick={() => dispatch(Decrement(el.id))}>
                          <ExpandMoreIcon />
                        </button>
                      </div>
                    </div>
                  </td>

                  <td className="">
                    <h1 className="font-bold">
                      $ {el.product.price * el.quantity}
                    </h1>
                  </td>

                  <td className="w-[30px]">
                    <Button
                      onClick={() => {
                        dispatch(DeleteProduct(el.id));
                      }}
                    >
                      <HighlightOffIcon
                        sx={{
                          fontSize: "20px",
                          borderRadius: "55%",
                          padding: " 0px",
                          bgcolor: "red",
                          color: "white",
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </Button>
                  </td>
                </tr>
                <br />
              </>
            ))
          )}
        </tbody>
      </table>

      <div className="flex w-[90%] justify-between m-auto mt-[50px]">
        <Button
        onClick={()=>{
            window.location = '/'
        }}
          sx={{
            border: "1px solid black",
            padding: "10px 30px",
            color: "black",
          }}
        >
          Return To Shop
        </Button>
        <div className="flex gap-3">
          <Button
            sx={{
              border: "1px solid black",
              padding: "10px 30px",
              color: "black",
            }}
          >
            Update Cart
          </Button>
          <Button
            onClick={() => dispatch(ClearBasket())}
            sx={{
              border: "1px solid black",
              padding: "10px 30px",
              color: "red  ",
            }}
          >
            Remove all
          </Button>
        </div>
      </div>

      <div className="w-[90%] flex m-auto justify-between items-start mt-[50px]">
        <div className="flex gap-3">
          <TextField
            sx={{ width: "300px" }}
            label="Coupon Code"
            variant="outlined"
          />
          <Button
            sx={{
              border: "1px solid black",
              padding: "15px 30px",
              color: "black",
            }}
          >
            Update Cart
          </Button>
        </div>

        <div className="w-[40%] border border-black p-[20px]">
          <h1 className="text-3xl">Cart Total</h1>
          <div className="flex justify-between p-[20px] items-center">
            <h2 className="text-xl">Subtotal</h2>
            <h2 className="font-bold text-xl">$ {subTotal}</h2>
          </div>{" "}
          <hr />
          <div className="flex justify-between p-[20px] items-center">
            <h2 className="text-xl">Shopping</h2>
            <h2 className="font-bold text-xl">Free</h2>
          </div>{" "}
          <hr />
          <div className="flex justify-between p-[20px] items-center">
            <h2 className="text-xl font-bold">Total: </h2>
            <h2 className="font-bold text-xl">${Total}</h2>
          </div>
          <div className="w-[60%] m-auto">
            <Button
              sx={{
                width: "100%",
                margin: "auto",
                bgcolor: "#DB4444",
                color: "white",
              }}
            >
              Procees to checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bascet;
