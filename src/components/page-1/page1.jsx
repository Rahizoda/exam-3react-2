import { Button, TextField, ThemeProvider } from "@mui/material";
import React from "react";
import img2 from '..//page-1/Icon-Google.png'
import { Link } from "react-router-dom";


const PageLogin = () => {
  return (
    <div className=" w-[90%]   md:w-[450px] m-auto mt-[30%] md:mt-[10%] bg-white text-black dark:bg-black dark:text-white">
      <h1 className="text-4xl ">Create an account</h1> <br />
      <p>Enter your details below</p> <br />
    

       <form cls action="" className="flex flex-col  m-auto bg-white text-black dark:bg-black dark:text-white  gap-5">
        <TextField  id="outlined-basic" label="Name" variant="outlined" />
        <TextField 
          id="outlined-basic"
          label="Email or phone number"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button
          sx={{ width: "100%", bgcolor: "red", color: "white", height: "50px" }}
        >
          Create Account
        </Button>
        <Button
          sx={{
            width: "100%",
            bgcolor: "white",
            color: "black",
            border: "1px solid black",
            height: "50px",
          }}
        >
          {" "}
          <img className="w-7 mr-5" src={img2} alt="" /> Sign up with Google
        </Button>
        <h1 className="text-center text-xl">

          Already have account? <Link to='/login'> <span className="border-b cursor-pointer">Log in</span> </Link>
        </h1>
        </form>
     
    </div>
  );
};

export default PageLogin;
