import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import Forgot from "../Forgot/Forgot";
import Header from "../Header/Header";
function Login() {
  const navigate = useNavigate();
  const signup = () => {
    let path = "/signup";
    navigate(path);
  };
  const forget = () => {
    let path = "/Forgot";
    navigate(path);
  };
  return (
    <div className="container-fluid">
      <div className="sigin-wrap">
        <div className="pad-content">
          <h2 className="text-center mb-3">Sign In</h2>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="d-flex justify-content-end mb-3">
              <a onClick={() => forget()} href="">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="btn mb-3" id="signin-btn">
              Sign In
            </button>
            <button type="submit" className="btn mb-3 clr" id="signin-btn">
              Sign in With Google
            </button>
            <div className="text-center">
              <span>
                {" "}
                New User?{" "}
                <a onClick={() => signup()} href="">
                  Create Account
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
