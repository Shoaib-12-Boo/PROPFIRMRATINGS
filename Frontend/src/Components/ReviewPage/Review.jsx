import React, { useEffect, useState } from "react";
import style from "./Review.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Review = () => {
  const navigate = useNavigate()
  const [company, setCompany] = useState({})
  const [coupon,setCoupon] = useState([])
  const param = useParams()
  useEffect(()=>{
    axios.get("/get-company?id="+param.companyId).then((resp)=>{
      setCompany(resp.data.company)
      setCoupon(resp.data.company.company_coupon.split(','))
    })
  },[])
let [flag, setFlag] = useState(false);
let review = [1, 2, 3];
  return (
    <div className="pb-5">
      <div
        className={`${style.reviewNav} mb-5 text-white py-4 d-flex justify-content-around rounded-4`}
      >
        <div className={`d-flex px-1  mt-5`}>
          <img
            className={`${style.binanceImg} rounded`}
            src={company.company_logo}
            alt=""
          />
          <div className={`ps-3`}>
            <h3>{company.company_name}</h3>
            <p className={`text-secondary`}>Reviews 1 . Excellent</p>
            <div>
              <i
                className={`fa-solid ms-1 p-1 ${style.starbg} ${style.starbgGood} fa-star`}
              />
              <i
                className={`fa-solid ms-1 p-1 ${style.starbg} ${style.starbgGood} fa-star`}
              />
              <i
                className={`fa-solid ms-1 p-1 ${style.starbg} ${style.starbgGood} fa-star`}
              />
              <i
                className={`fa-solid ms-1 p-1 ${style.starbg} ${style.starbgGood} fa-star`}
              />
              <i
                className={`fa-solid ms-1 p-1 ${style.starbg} ${style.starbgGood} fa-star`}
              />
            </div>
          </div>
        </div>
        <div className={`${style.topside}`}>
          <div className={`${style.visit}`}>
            <a href={company.company_website} target='_blank'
              className={`border border-white text-white rounded ps-3 pe-5 py-3 text-center `}
            >
              Visit company site
              <i className={`fa-solid ms-2 fa-arrow-up-right-from-square`} />
            </a>
          </div>
          <br />
          <div className={` border border-white rounded text-center`}>
            <div className={` ${style.coupon} px-2 text-start border `}>
              <p className={`w-100 text-center pt-2`}>
                Coupon codes
                <img
                  className={`${style.couponImg} ms-2`}
                  style={{ width: "20px" }}
                  src="./Assert/coupon.png"
                  alt=""
                />
                <hr className={`border`} />
              </p>
              {/* <br /> */}
              {coupon.map((item)=>{
                return (
              <p
                className={`rounded-5 px-2 me-2 ${style.backg} d-inline-block pe-4`}
              >
                {item}
              </p>
                )
              })}
            </div>
          </div>
          <p className={`text-center mt-2`}>
            Subscribe for Coupon codes <i className="fa-solid fa-bell" />
          </p>
        </div>
      </div>
      {/* --------------------------------------------------- */}
      <div className={`container ${style.reviewBody} d-flex`}>
        <div className={`col-lg-6 col-md-12 col-sm-12`}>
          {""}
          <div
            className={` ${style.review} bg-light shadow d-flex justify-content-between rounded p-3 `}
          >
            <div className="w-75">
              {" "}
              <div className={`rounded-circle bg-dark d-inline-block`}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <Link
                to={"/write-review/"+company.company_name+"/"+company._id}
                className={`d-inline-block ms-3 rounded`}
              >
                Write a Review
              </Link>
            </div>
            <div>
              <select onChange={()=>{navigate("/write-review/"+company.company_name+"/"+company._id)}} className="form-select w-100 ">
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
          </select>
            </div>
          </div>
          <div className={`my-5`}>
            <h2>Reviews</h2>
          </div>
          <div className={`d-flex justify-content-between`}>
            <p
              onClick={() => {
                setFlag((current) => !current);
              }}
              className={`border d-inline-block p-2 rounded`}
              type="button"
            >
              Filter by rating
            </p>

            <div>
              <span>Sort: </span>
              <p className={`border d-inline-block p-2 rounded`}>Recent</p>
            </div>
          </div>
          {/* ------------------filter-------------------------- */}
          <div
            className={
              flag ? `shadow position-absolute bg-white z-2 w-100` : `d-none `
            }
          >
            <div className={`p-4`}>
              <h6>Filter by</h6>
              <hr />
              <div className={`d-flex justify-content-between`}>
                <div>
                  <div>
                    <h6>Rating</h6>
                    <button
                      className={`btn rounded-0 px-3 btn-outline-light text-dark border rounded-start`}
                    >
                      5
                    </button>
                    <button
                      className={`btn rounded-0 px-3 btn-outline-light text-dark border`}
                    >
                      4
                    </button>
                    <button
                      className={`btn rounded-0 px-3 btn-outline-light text-dark border`}
                    >
                      3
                    </button>
                    <button
                      className={`btn rounded-0 px-3 btn-outline-light text-dark border`}
                    >
                      2
                    </button>
                    <button
                      className={`btn rounded-0 px-3 btn-outline-light text-dark border rounded-end`}
                    >
                      1
                    </button>
                  </div>
                  <br />
                  <div>
                    <h6>Date posted</h6>
                    <div>
                      <input
                        type="checkbox"
                        className={`me-3`}
                        style={{ width: "20px", height: "20px" }}
                      />
                      <label htmlFor="">Any</label>
                    </div>

                    <div>
                      <input
                        type="checkbox"
                        className={`me-3`}
                        style={{ width: "20px", height: "20px" }}
                      />
                      <label htmlFor="">Last 30 Days</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className={`me-3`}
                        style={{ width: "20px", height: "20px" }}
                      />
                      <label htmlFor="">Last 3 months</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className={`me-3`}
                        style={{ width: "20px", height: "20px" }}
                      />
                      <label htmlFor="">Last 6 months</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className={`me-3`}
                        style={{ width: "20px", height: "20px" }}
                      />
                      <label htmlFor="">Last 12 months</label>
                    </div>
                  </div>{" "}
                </div>
                <div>
                  <div>
                    <h6>Search keyword</h6>
                    <div className={`rounded border`}>
                      <input
                        className={`input bg-white px-2 border-0`}
                        type="search"
                        name=""
                        placeholder="Type keywords here.."
                        id=""
                      />
                      <button className={`text-dark btn`}>🔍</button>
                    </div>
                  </div>
                  <br />
                  <div>
                    <h6>Languages</h6>
                    <div>
                      <input
                        type="checkbox"
                        className={`me-3`}
                        style={{ width: "50px", height: "20px" }}
                      />
                      <label htmlFor="">All Languages</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className={`me-3`}
                        style={{ width: "50px", height: "20px" }}
                      />
                      <label htmlFor="">English</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className={`me-3`}
                        style={{ width: "50px", height: "20px" }}
                      />
                      <label htmlFor="">Français</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className={`me-3`}
                        style={{ width: "50px", height: "20px" }}
                      />
                      <label htmlFor="">Español</label>
                    </div>
                    <div>
                      {" "}
                      <input
                        type="checkbox"
                        className={`me-3`}
                        style={{ width: "50px", height: "20px" }}
                      />
                      <label htmlFor="">Türkçe</label>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className={`d-flex justify-content-between`}>
                <button className={`btn text-decoration-underline fs-5 text-primary`}>
                  Reset
                </button>
                <button
                  className={`p-2 btn px-4 btn-outline-primary rounded-5`}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          {/* ----------------------filte end--------------------- */}
          {""}
          <div className={``}>
            {review.map(() => {
              return (
                <div className={`shadow p-4 mb-3`}>
                  <div className={`rounded-circle bg-dark d-inline-block`}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                  <p className={`text-dark d-inline-block ms-3 rounded`}>
                    Adil Aijaz
                  </p>
                  <br />
                  <p className={`border-bottom`}>11/30/2022</p>
                  <div className={`mb-3`}>
                    <i
                      className={`fa-solid ms-1 p-1 ${style.starbgGood} fa-star`}
                    />
                    <i
                      className={`fa-solid ms-1 p-1 ${style.starbgGood} fa-star`}
                    />
                    <i
                      className={`fa-solid ms-1 p-1 ${style.starbgGood} fa-star`}
                    />
                    <i
                      className={`fa-solid ms-1 p-1 ${style.starbgGood} fa-star`}
                    />
                    <i
                      className={`fa-solid ms-1 p-1 ${style.starbgGood} fa-star`}
                    />
                  </div>
                  <div>
                    <h6>This is amazinggg!</h6>
                    <p className={`border-bottom`}>

                      "I'm quite happy to post this 5-star for, as I bellive
                      they've more than earned it and continues to daily! I
                      srchsed a Lifetime Membership and got this."I'm quite
                      happy to post this 5-star for, as I bellive they've more
                      than earned it and continues to daily! I srchsed a
                      Lifetime Membership and got this.
                    </p>
                  </div>
                </div>
              );
            })}

            {/* ---------- */}
          </div>
        </div>
        {/* ----------------- */}
        <div className={`col-1`}>&nbsp;</div>
        <div className={`col-lg-4 col-md-12 col-sm-12`}>
          <div className={`shadow px-4 py-3`}>
            <h5 className={`fw-bold text-dark`}>About {company.company_name}</h5>
            <p className="ms-2 fs-6">
              {company.company_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
