import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const url = process.env.REACT_APP_BACKEND_URL;

  const getUserType = (userInfo) => {
    if ("Admin_ID" in userInfo) return "admin";
    else if ("Guest_ID" in userInfo) return "guest";
    else return "employee";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${url}/login.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setErrorMessage(""); // Clear error message
          console.log(data.user_info);

          navigate(`${getUserType(data.user_info)}`, { state: data.user_info });
        } else {
          setErrorMessage(data.message); // Set error message
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("An error occurred. Please try again.");
      });
  };

  return (
    <div className="login-page">
      <Header buuttnText={"Sign Up"} />
      <div className="login-body">
        <div className="login-form">
          <h2>Welcom to CODEHOUSE</h2>
          {errorMessage && (
            <p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>
          )}

          <form onSubmit={handleSubmit}>
            <input
              className="email-field"
              type="email"
              placeholder="Email"
              onChange={(e) => setEamil(e.target.value)}
              value={email}
              required
            />
            <input
              className="password-field"
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
