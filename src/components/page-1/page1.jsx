import { Button, TextField, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import img2 from '..//page-1/Icon-Google.png'
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../config/configAxios";
import Loader from "../../config/Loading";


const PageLogin = () => {
  const [loading, setLoading] = useState(false);
    let navigate = useNavigate();
  
    async function login(userName , phoneNumber , email , password ,confirmPassword) {
      setLoading(true);
      try {
        const res = await API.post("Account/register",{userName , phoneNumber , email , password ,confirmPassword});
        if (res.data.data) {
          localStorage.setItem("accessToken", res.data.data);
          navigate("/");
        }
        return res.data;
      } finally {
        setLoading(false);
      }
    }
  
    const handlesubmit = (e) => {
      e.preventDefault();
      let userName = e.target["name"].value;
      let phoneNumber = e.target["phone"].value;
      let email = e.target["email"].value;
      let password = e.target["pass"].value;
      let confirmPassword = e.target["addpass"].value;
      login(userName , phoneNumber , email , password ,confirmPassword)
    };
  
      if (loading) return <Loader  />

  return (
    <div className=" w-[90%]   md:w-[450px] m-auto mt-[30%]  md:mt-[10%] p-5 bg-white text-black dark:bg-[#070725] dark:text-white">
      <h1 className="text-4xl ">Create an account</h1> <br />
      <p>Enter your details below</p> <br />
    

       <form onSubmit={handlesubmit} action="" className="flex flex-col dark:bg-[#070725]   m-auto bg-white text-black  dark:text-white  gap-5">
        <TextField  name="name" id="outlined-basic" label="Name" variant="outlined" />
        <TextField 
          name="email"
          id="outlined-basic"
          label="Email "
          variant="outlined"
        />
        <TextField 
          name="phone"
          id="outlined-basic"
          label=" Phone number"
          variant="outlined"
        />
        <TextField name="pass" id="outlined-basic" label="Password" variant="outlined" />
        <TextField name="addpass" id="outlined-basic" label="confirmPassword" variant="outlined" />
        <Button type="submit"
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
