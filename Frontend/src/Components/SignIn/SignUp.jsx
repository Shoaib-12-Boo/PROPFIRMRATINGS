import axios from "axios";
import React from "react";
import style from './signup.module.css'
import { useGoogleLogin } from "@react-oauth/google";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const form = useForm();
  const navigate = useNavigate();

  const getData = (data) => {
    data.user_reviews = [];
    axios
      .post("/signup", data)
      .then((resp) => {
        if (resp.data.success) {
          form.reset();
          toast.success("SignUp Successfully");
          navigate("/login");
        }
      })
      .catch((err) => {
        toast.error("Unable to SignUp");
      });
  };
  let dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      axios.post("/google-login", codeResponse).then((resp) => {
        dispatch({
          type: "LOGINDATA",
          payload: resp.data.obj,
        });
        toast.success("SignUp Successfully");
        navigate("/");
      });
    },
  });

  return (
    <>
      <div className={`container ${style.pad} p-5`}>
        <div className={`mt-5 ${style.pad}`}></div>
        <div className={`w-50 shadow-lg py-5 ${style.form} px-5 rounded-5 m-auto`}>
          <div className="text-center mb-4">
            <button
              className="btn btn-secondary fs-5 m-auto"
              onClick={() => login()}
            >
              
              <img style={{width:"40px"}} src="./Assert/google.png" alt="" /> Sign Up with Google 🚀
            </button>
          </div>
          <form onSubmit={form.handleSubmit(getData)}>
            <div className="form-floating mb-3">
              <input
                type="text"
                {...form.register("user_name")}
                className="form-control"
                placeholder="User Name"
              />
              <label for="floatingInput">User Name</label>
            </div>
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
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className={`my-3`}>
              <button className={`btn btn-primary me-3`}>Sign Up</button>
            </div>
            <div className={`text-center`}>
              <Link to={"/login"}>Already have an account ?</Link>
            </div>
          </form>
        </div>
        <div className={`mt-5`}></div>
      </div>
    </>
  );
};

export default SignUp;
