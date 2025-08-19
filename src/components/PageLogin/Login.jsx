import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/configAxios";
import { Button, TextField } from "@mui/material";
import Loader from "../../config/Loading";

const Login = () => {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  async function login(userName, password) {
    setLoading(true);
    try {
      const res = await API.post("Account/login", { userName, password });
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
    let userName = e.target["userName"].value;
    let password = e.target["password"].value;
    login(userName, password);
  };

    if (loading) return <Loader/>
    
  return (
    <div className="mt-[200px] w-[450px] m-auto">
      <h1 className="text-4xl">Log in to Exclusive</h1> <br />
      <p>Enter your details below</p> <br />

      <form
        onSubmit={handlesubmit}
        className="flex flex-col m-auto bg-white text-black dark:bg-black dark:text-white  gap-5"
      >
        <TextField
          name="userName"
          label="Email or phone number"
          variant="outlined"
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
        />

        <Button type="submit" sx={{ width: "100%", color: "red", height: "50px" }}>
          Forgot Password ?
        </Button>

        <Button
          type="submit"
          disabled={loading}
          sx={{ width: "100%", bgcolor: "red", color: "white", height: "50px" }}
        >
          {loading ? "Loading..." : "Log In"}
        </Button>
      </form>
    </div>
  );
};

export default Login;
