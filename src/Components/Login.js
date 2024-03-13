import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckAuth from "../Reducers/CheckAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
   const auth = localStorage.getItem("user");
   let ifAuthTrue = async () => {
    let user;
     if(auth){
      user = await CheckAuth(auth);
     }
     else{
      return ''
     }
     if (auth === user._id) {
       navigate("/");
     }
     else{
      navigate('/login')
     }
   };
  useEffect(() => {
ifAuthTrue();
  });

  const PostUsersData = async () => {
    let user = await fetch("https://e-commerse-project.onrender.com/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-type": "application/json",
      },
    });

    user = await user.json();
    if (user.result === "success") {
      const data = await fetch(
        "https://e-commerse-project.onrender.com/shopykit/api/v1/user-details"
      );
      const response = await data.json();
      const getUser = await response.filter((each) => {
        return each.email === email;
      });
      localStorage.setItem("user", getUser[0]._id);
      navigate("/");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="login-main-container">
      <h3>
        Welcome Back to Shopy
        <span style={{ color: "red", fontSize: "1.8rem" }}>K</span>it's
      </h3>
      <div className="login-form-container">
        <div className="form">
          <label>Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={PostUsersData}>Submit</button>
        </div>
      </div>
      <p style={{ color: "black" }} className="signin-dont-have-acc">
        I Don't have an Account ? Please SignUp here
        <Link to="/signup">Register</Link>
      </p>
    </div>
  );
}
