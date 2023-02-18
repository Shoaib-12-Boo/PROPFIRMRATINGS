import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import style from "./WriteReview.module.css";

const WriteReview = () => {
  const user = useSelector((store) => store.userSection);
  const form = useForm()
  const navigate = useNavigate()
  const param = useParams()
  let id= {}
  const reviewSubmit = (data)=>{
    id.user_id = user._id
    id.company_id = param.companyId
    data.user_name=user.user_name
    data.company_name=param.companyName
    console.log(data)
    axios.post("/submit-review", {id,data}).then((resp)=>{
      navigate("/")
    })
  }
  return (
    <div className={`pb-5`}>
      <form onSubmit={form.handleSubmit(reviewSubmit)}>
      <section
        className={`container-fluid bg-dark text-white p-5 rounded-3 ${style.main}`}
      >
        <div className={`row`}>
          <div className={`col-sm-4 px-0 text-sm-end`}>
            <h4 className="fw-bold">Write a Review</h4>
          </div>
          <div className="col-4" />
          <div className="col-sm-4 fw-bold">
            
            <span className={`fs-4 mt-2`}>{param.companyName}</span>
          </div>
        </div>
        <div
          className={`col-md-6 p-2 bg-white text-black ${style.overflow} rounded-2`}
        >
          <div className={`row`}>
            <div className={`col-md-8 mt-1 fw-semibold ${style.fontsize}`}>
              <h5>Rate Your Recent experience</h5>
            </div>
            <select {...form.register("rating")} className= "col-md-3 mt-2 form-select" name="" id="">
            <option selected value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
            </select>
          </div>
        </div>
      </section>
      <section className="container-fluid mt-5">
        <div
          className="col-md-6 m-auto bg-white shadow rounded-2"
          style={{ padding: "1rem" }}
        >
          
            <div className="mt-2 mb-2">
              <label className={`form-label ${style.fontsize} fw-bold`} htmlFor="title">
                Title of the review
              </label>
              <input
              {...form.register("title")}
                className="form-control"
                type="text"
                id="title"
                placeholder="Highlight your review in few words"
                required=""
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="form-label fw-bold" htmlFor="exp">
                Tell us about your experience
              </label>
              <textarea
              {...form.register("review")}
                className="form-control"
                id="exp"
                rows={3}
                placeholder="Why did you gave this rating? Is the company doing well? How can they improve? Remember to be honest..."
                defaultValue={""}
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="form-label fw-bold" htmlFor="date">
                Date of experience
              </label>
              <p style={{ fontSize: 13 }}>
                Must be within 12 months. Providing a date shows this review is
                genuine.
              </p>
              <input
                {...form.register("date")}
                className="form-control"
                type="date"
                id="date"
                placeholder="Highlight your review in few words"
                required=""
              />
            </div>
            <div className="mt-2 mb-2">
              <label className="form-label fw-bold" htmlFor="title">
                Time spend on platform (optional){" "}
              </label>

              <input
              {...form.register("spendTime")}
                className="form-control"
                type="text"
                id="title"
                placeholder="For ex. 2 months"
              />
            </div>
            <div className="mt-2 mb-2 text-center">
              <p>You have to first connect your wallet to submit a review</p>
            </div>
            <div className="text-center">
              {Object.keys(user).length !== 0 ? (
                <button className="btn btn-lg btn-primary rounded-5 text-uppercase">
                  Submit Review
                </button>
              ) : (
                <Link
                  to={"/login"}
                  className="btn btn-outline-primary rounded-5 text-uppercase"
                >
                  Please Login
                </Link>
              )}
            </div>
        </div>
      </section>
          </form>
    </div>
  );
};

export default WriteReview;
