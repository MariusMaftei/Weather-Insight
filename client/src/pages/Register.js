import React, { useState } from "react";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";
import Wrapper from "../components/UI/Wrapper";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      response.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div className={classes.container}>
      <Wrapper>
        <form onSubmit={handleSubmit} action="" className={classes.formControl}>
          <h1>Register</h1>

          <div className={classes.inputBox}>
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <i class="bx bxs-user"></i>
          </div>

          <div className={classes.inputBox}>
            <input
              type="text"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bx bxs-user"></i>
          </div>

          <div className={classes.inputBox}>
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <button type="submit" className={classes.btn}>
            Register
          </button>
          {error && <span>Something went wrong!</span>}
          <div className={classes.loginRegisterLink}>
            <span>
              Already have an account?{" "}
              <Link to={"/login"}>
                <span className={classes.redirectBtn}>Login</span>
              </Link>
            </span>
          </div>
        </form>
      </Wrapper>
    </div>
  );
}
