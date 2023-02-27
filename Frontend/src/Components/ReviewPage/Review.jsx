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
      resp.data.company.company_reviews.splice(0,1)
      setCompany(resp.data.company)
      setCoupon(resp.data.company.company_coupon.split(','))
    })
  },[])
let [flag, setFlag] = useState(false);
let [filterArray,setfilterArray] = useState(company.company_reviews)
const getData = (item) => {
  if (item == "Any") {
    filterArray = company.company_reviews;
  } else if (item == "1") {
    filterArray = company.company_reviews.filter((data) => {
      if (data.company_rating >= 2) {
        return data;
      }
    });
  } else if (item == "2") {
    filterArray = company.company_reviews.filter((data) => {
      if (data.company_rating >= 2) {
        return data;
      }
    });
  } else if (item == "3") {
    filterArray = company.company_reviews.filter((data) => {
      if (data.company_rating >= 3) {
        return data;
      }
    });
  } else if (item == "4") {
    filterArray = company.company_reviews.filter((data) => {
      if (data.company_rating >= 4) {
        return data;
      }
    });
  }
  setfilterArray([...filterArray]);
};
  return (
    <div className="pb-5">
      <div
        className={`${style.reviewNav} mb-5 text-white py-4 d-flex justify-content-around rounded-4`}
      >
        <div className={`d-flex ${style.centerhead} px-1  mt-5`}>
          <img
            className={`${style.binanceImg} rounded`}
            src={company.company_logo}
            alt=""
          />
          <div className={`ps-3`}>
            <h3>{company.company_name}</h3>
            <p className={`text-secondary`}>Reviews . Excellent</p>
            <div>
              <i
                className={company.company_rating>=1?`fa-solid ms-1 p-1 ${style.starbg} ${style.starbgGood} fa-star`:`fa-solid ms-1 p-1 ${style.starbg} fa-star`}
              />
              <i
                className={company.company_rating>=2?`fa-solid ms-1 p-1 ${style.starbg} ${style.starbgGood} fa-star`:`fa-solid ms-1 p-1 ${style.starbg} fa-star`}
              />
              <i
                className={company.company_rating>=3?`fa-solid ms-1 p-1 ${style.starbg} ${style.starbgGood} fa-star`:`fa-solid ms-1 p-1 ${style.starbg} fa-star`}
              />
              <i
                className={company.company_rating>=4?`fa-solid ms-1 p-1 ${style.starbg} ${style.starbgGood} fa-star`:`fa-solid ms-1 p-1 ${style.starbg} fa-star`}
              />
              <i
                className={company.company_rating==5?`fa-solid ms-1 p-1 ${style.starbg} ${style.starbgGood} fa-star`:`fa-solid ms-1 p-1 ${style.starbg} fa-star`}
              />
            </div>
          </div>
        </div>
        <div className={`${style.topside}`}>
          <div className={`${style.visit}`}>
            <a href={"https://"+company.company_website} target='_blank'
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
                    onClick={()=>{getData(5)}}
                      className={`btn rounded-0 px-3 btn-outline-light text-dark border rounded-start`}
                    >
                      5
                    </button>
                    <button
                    onClick={()=>{getData(4)}}
                      className={`btn rounded-0 px-3 btn-outline-light text-dark border`}
                    >
                      4
                    </button>
                    <button
                    onClick={()=>{getData(3)}}
                      className={`btn rounded-0 px-3 btn-outline-light text-dark border`}
                    >
                      3
                    </button>
                    <button
                    onClick={()=>{getData(2)}}
                      className={`btn rounded-0 px-3 btn-outline-light text-dark border`}
                    >
                      2
                    </button>
                    <button
                    onClick={()=>{getData(1)}}
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
              </div>
              <hr />
              <div className={`d-flex justify-content-between`}>
                <button onClick={()=>{getData("Any")}} className={`btn text-decoration-underline fs-5 text-primary`}>
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
            {company.company_reviews?filterArray.map((item) => {
              return (
                <div className={`shadow p-4 mb-3`}>
                  <div className={`rounded-circle bg-dark d-inline-block`}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                  <p className={`text-dark d-inline-block ms-3 rounded`}>
                    {item.user_name}
                    
                  </p>
                  <br />
                  <p className={`border-bottom`}>{item.date}</p>
                  <div className={`mb-3`}>
                    <i
                      className={item.rating>=1?`fa-solid ms-1 p-1 ${style.starbgGood} fa-star`:`fa-solid ms-1 p-1 ${style.starbg} fa-star`}
                    />
                    <i
                      className={item.rating>=2?`fa-solid ms-1 p-1 ${style.starbgGood} fa-star`:`fa-solid ms-1 p-1 ${style.starbg} fa-star`}
                    />
                    <i
                      className={item.rating>=3?`fa-solid ms-1 p-1 ${style.starbgGood} fa-star`:`fa-solid ms-1 p-1 ${style.starbg} fa-star`}
                    />
                    <i
                      className={item.rating>=4?`fa-solid ms-1 p-1 ${style.starbgGood} fa-star`:`fa-solid ms-1 p-1 ${style.starbg} fa-star`}
                    />
                    <i
                      className={item.rating==5?`fa-solid ms-1 p-1 ${style.starbgGood} fa-star`:`fa-solid ms-1 p-1 ${style.starbg} fa-star`}
                    />
                    
                  </div>
                  <div>
                    <h6>{item.title}</h6>
                    <p className={`border-bottom`}>
                    {item.review}
                    </p>
                  </div>
                </div>
              );
            }):<div>Sorry There is no Review right now</div>}

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
          <div className={`mt-3 px-3 py-4 shadow`}>
            <h4 className={`fw-semibold`}>
              Company Info
            </h4>
            <div className="mt-4">
              <h5 className={`fw-semibold`}>Trading platform</h5>
              <div className={`d-flex`}>
                <p className={`fw-semibold w-50`}><img className={`w-75`} src="/Assert/metatrader4.png"/></p>
                <p className={`fw-semibold w-50`}><img className={`w-75`} src="/Assert/metatrader5.png"/></p>
              </div>
            </div>
            <div className="mt-2">
              <h5 className={`fw-semibold`}>Deposit methods</h5>
              <div className={`d-flex gap-3`}>
                <p className={`fs-6`}><i className={`fa fa-credit-card ${style.iconColor}`}></i> Card</p>
                <p className={`fs-6`}><i className={`fa-brands fa-bitcoin ${style.iconColor}`}></i> Crypto</p>
                <p className={`fs-6`}><i className={`fa fa-building-columns ${style.iconColor}`}></i> Bank</p>
                <p className={`fs-6`}><i className={`fa fa-user-group ${style.iconColor}`}></i>P2P</p>
              </div>
            </div>
            
            <div className="mt-2">
              <h5 className={`fw-semibold`}>Withdrawal methods</h5>
              <div className={`d-flex gap-3`}>
                <p className={`fs-6`}><i className={`fa fa-credit-card ${style.iconColor}`}></i> Card</p>
                <p className={`fs-6`}><i className={`fa-brands fa-bitcoin ${style.iconColor}`}></i> Crypto</p>
                <p className={`fs-6`}><i className={`fa fa-building-columns ${style.iconColor}`}></i> Bank</p>
                <p className={`fs-6`}><i className={`fa fa-user-group ${style.iconColor}`}></i>P2P</p>
              </div>
            </div>
            
            <div className="mt-2">
              <h5 className={`fw-semibold`}>Amount sizes</h5>
              <div className={`d-flex gap-2`}>
                <div className={`rounded-pill bg-light px-3 py-1`}>$1,00</div>
                <div className={`rounded-pill bg-light px-3 py-1`}>$5,00</div>
                <div className={`rounded-pill bg-light px-3 py-1`}>$10,00</div>
                <div className={`rounded-pill bg-light px-3 py-1`}>$100,00</div>
              </div>
            </div>
            <div className="mt-3">
              <h5 className={`fw-semibold`}>Rules</h5>
              <div className={`d-flex gap-2`}>
                <div className={`rounded-pill bg-light px-2 py-1`}>Maxium loss</div>
                <div className={`rounded-pill bg-light px-2 py-1`}>Max drawdown</div>
                <div className={`rounded-pill bg-light px-2 py-1`}>Another sl</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
};

export default Review;
