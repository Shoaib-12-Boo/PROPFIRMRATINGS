import axios from "axios";
import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import countryList from "react-select-country-list";
import style from "./SearchResult.module.css";

const SearchResult = () => {
  const options = useMemo(() => countryList().getData(), []);
  const param = useParams();
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  let [filterArray, setfilterArray] = useState([...companies]);
  useEffect(() => {
    axios.get("/get-search-companies?word=" + param.search).then((resp) => {
      setCompanies(resp.data.searchCompanies);
      setfilterArray(resp.data.searchCompanies);
    });
  }, []);
  const getData = (item) => {
    if (item == "Any") {
      filterArray = companies;
      setfilterArray([...filterArray]);
    } else if (item == "2") {
      filterArray = companies.filter((data) => {
        if (data.company_rating >= 2) {
          return data;
        }
      });
      setfilterArray([...filterArray]);
    } else if (item == "3") {
      filterArray = companies.filter((data) => {
        if (data.company_rating >= 3) {
          return data;
        }
      });
      setfilterArray([...filterArray]);
    } else if (item == "4") {
      filterArray = companies.filter((data) => {
        if (data.company_rating >= 4) {
          return data;
        }
      });
      setfilterArray([...filterArray]);
    }
  };
  // console.log(filterArray);
  return (
    <div>
      <h2 className={`mx-auto text-center p-5`}>
        Result for{" "}
        {param.search.charAt(0).toUpperCase() + param.search.slice(1)}
      </h2>

      {companies.length ? (
        <div className="container bg-light rounded-4 py-5 mb-5 d-flex">
          <div className={`col-lg-3 border bg-white rounded-4`}>
            <h5 className={`text-dark pt-3 ps-1 fw-semibold`}>Rating</h5>
            <div className={`ms-3 my-2`}>
              <button
                onClick={() => {
                  getData("Any");
                }}
                className={`btn border border-dark w-25 text-dark fs-6`}
              >
                Any
              </button>
              <button
                onClick={() => {
                  getData("2");
                }}
                className={`btn border border-dark w-25 text-dark fs-6`}
              >
                2.0+
              </button>
              <button
                onClick={() => {
                  getData("3");
                }}
                className={`btn border border-dark w-25 text-dark fs-6`}
              >
                3.0+
              </button>
              <button
                onClick={() => {
                  getData("4");
                }}
                className={`btn border border-dark w-25 text-dark fs-6`}
              >
                4.0+
              </button>
            </div>
            <h5 className="fw-semibold ps-1">Location</h5>
            <select className="form-select py-2 my-3">
              {options.map((item) => {
                return <option>{item.label}</option>;
              })}
            </select>
            <div className="mb-3">
              <input
                type="text"
                className="form-control py-2"
                placeholder="City or Zip code"
              />
            </div>
            <h5 className="company-heading fw-semibold">Company Status</h5>

            <div className="box-field-1 mt-3 d-flex justify-content-between">
              <h6>
                Verified <i class="fa fa-thin fa-circle-exclamation"></i>
              </h6>
              <input className={style.checkbox1} type="checkbox" />
            </div>

            <div className="box-field-1 mt-3 d-flex justify-content-between">
              <h6>
                Claimed <i class="fa fa-regular fa-circle-exclamation"></i>
              </h6>
              <input className={style.checkbox1} type="checkbox" />
            </div>
          </div>
          <div className={`col-lg-1`}></div>
          <div className={`col-lg-8 bg-light`}>
            {filterArray.map((item) => {
              return (
                <div
                  onClick={() => {
                    navigate("/review/" + item._id);
                  }}
                  className={`rounded-3 ${style.hover1} mb-3 bg-white pb-3 px-3`}
                >
                  <div className="d-flex py-3">
                    <div className={`w-25`}>
                      <img src={item.company_logo} className={`w-50`} alt="" />
                    </div>
                    <div>
                      <h5 className={`text-dark fw-semibold`}>
                        {item.company_name}
                      </h5>
                      <h6>
                        Rating {item.company_rating}{" "}
                        <i
                          className={`fa fa-star border-right border-3 pe-5`}
                        />
                        <span className={`ms-2`}>
                          {item.company_reviews.length} Reviews
                        </span>
                      </h6>
                      <h6>{item.company_location}</h6>
                    </div>
                  </div>
                  <div className="d-flex border-top p-3 gap-3">
                    <div className="d-flex gap-3">
                      <i className="fa fa-globe"></i>
                      <i className="fa fa-envelope"></i>
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className={`border-start px-3 fw-semibold`}>
                      {item.company_location}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className={`text-center bg-warning py-5 my-5`}>
          <h1 className={`fw-bold`} style={{ fontSize: "60px" }}>
            Oops, I found Nothing
          </h1>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
