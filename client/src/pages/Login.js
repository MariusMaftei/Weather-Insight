import React, { useContext, useRef } from "react";
import classes from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../components/UI/Wrapper";
import { Context } from "../context/auth-context";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post("/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      navigate("/");
      window.location.reload();
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className={classes.container}>
      <Wrapper>
        <form onSubmit={handleSubmit} className={classes.formControl}>
          <h1>Login</h1>

          <div className={classes.inputBox}>
            <input ref={emailRef} type="text" placeholder="Email" required />
            <i class="bx bxs-user"></i>
          </div>

          <div className={classes.inputBox}>
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
            <i class="bx bxs-lock-alt"></i>
          </div>

          <button className={classes.btn}>Login</button>
          <div className={classes.loginRegisterLink}>
            <span>
              Don't have an account?
              <Link to={"/register"}>
                <span className={classes.redirectBtn}>Register</span>
              </Link>
            </span>
          </div>
        </form>
      </Wrapper>
    </div>
  );
}
