import React, { useState } from "react";
import axiosInstance from "../axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [loginResult, setLoginResult] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post("/auth/login/", loginData);
      if (response.status === 200) {
        setLoginResult({ success: true, message: "Login successful" });
      } else {
        setLoginResult({ success: false, message: "Login failed" });
      }
    } catch (error) {
      setLoginResult({ success: false, message: "Login failed" });
    }
    setTimeout(() => {
      setLoginResult(null);
    }, 5000);
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="login-container col-md-4">
        <h2>Login</h2>
        {loginResult && (
          <p className={loginResult.success ? "success" : "error"}>
            {loginResult.message}
          </p>
        )}
        <dev className="row">
          <div className="col-md-12 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
            />
          </div>
        </dev>
        <dev className="row">
          <div className="col-md-12 mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </div>
        </dev>
        <dev className="row">
          <div className="col-md-12 mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>
        </dev>
        <div className="row">
          <div className="col-md-12"></div>
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
