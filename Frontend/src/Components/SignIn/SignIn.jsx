import axios from "axios";
import style from './signin.module.css'
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { NotificationManager } from 'react-notifications';
import { useGoogleLogin } from "@react-oauth/google";

const SignIn = () => {
  const form = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginData = (data) => {
    axios.post("/login", data).then((resp) => {
      if (resp.data.success) {
        localStorage.setItem('sessionToken',resp.data.token)
        NotificationManager.success("Login Successful");
        dispatch({
          type: "LOGINDATA",
          payload: resp.data.user,
        });
        navigate("/");
      } else {
        NotificationManager.error("Wrong Credentials");
      }
    });
  };
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      axios.post("/google-login", codeResponse).then((resp) => {
        if (resp.data.success) {
          localStorage.setItem('sessionToken',resp.data.token)
          NotificationManager.success("Login Successful");
          dispatch({
            type: "LOGINDATA",
            payload: resp.data.user,
          });
          navigate("/");
        } else {
          NotificationManager.error("Wrong Credentials");
        }
      });
    },
  });

  return (
    <>
      <div className={`container ${style.pad} p-5`}>
        <div className={`mt-5 ${style.pad}`}></div>
        <div className={`w-50 shadow-lg py-5 px-5 ${style.form} rounded-5 m-auto`}>
        <div className="text-center mb-4">
            <button
              className="btn btn-secondary fs-5 m-auto"
              onClick={() => login()}
            >
              <img style={{width:"40px"}} src="./Assert/google.png" alt="" /> Sign in with Google 🚀
            </button>
          </div>
          <form onSubmit={form.handleSubmit(loginData)}>
            <div className="form-floating mb-3">
              <input
                type="email"
                {...form.register("user_email")}
                className="form-control"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                {...form.register("user_password")}
                className="form-control"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className={`my-3`}>
              <button className={`btn btn-primary me-3`}>Log In</button>
              <Link to={"/signup"}>Create account</Link>
            </div>
          </form>
        </div>
        <div className={`mt-5`}></div>
      </div>
    </>
  );
};

export default SignIn;
