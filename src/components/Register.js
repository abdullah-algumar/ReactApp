import React, { useState } from "react";
import axiosInstance from "../axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [registerResult, setRegisterResult] = useState(null);

  const handleRegister = async () => {
    try {
      const response = await axiosInstance.post(
        "/auth/register/",
        registerData
      );
      if (response.status === 201) {
        setRegisterResult({
          success: true,
          message: "Registration successful",
        });
      } else {
        setRegisterResult({ success: false, message: "Registration failed" });
      }
    } catch (error) {
      setRegisterResult({ success: false, message: "Registration failed" });
    }
    setTimeout(() => {
      setRegisterResult(null);
    }, 5000);
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="register-container col-md-4">
        <h2>Register</h2>
        {registerResult && (
          <p className={registerResult.success ? "success" : "error"}>
            {registerResult.message}
          </p>
        )}
        <div className="row">
          <div className="col-md-12 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={registerData.username}
              onChange={(e) =>
                setRegisterData({ ...registerData, username: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={registerData.password2}
              onChange={(e) =>
                setRegisterData({ ...registerData, password2: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-primary w-100" onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
