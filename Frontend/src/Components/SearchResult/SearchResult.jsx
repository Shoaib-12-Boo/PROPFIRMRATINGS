import axios from "axios";
import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import countryList from "react-select-country-list";

const SearchResult = () => {
  const options = useMemo(() => countryList().getData(), []);
  const param = useParams()
  const navigate = useNavigate()
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    axios.get("/get-search-companies?word="+param.search).then((resp)=>{setCompanies(resp.data.searchCompanies)});
  }, []);
  return (
    <div>
      <h2 className={`mx-auto text-center p-5`}>Result for {param.search.charAt(0).toUpperCase() + param.search.slice(1)}</h2>
      <div className="container bg-light py-5 mb-5 d-flex">
        <div className={`col-lg-3 border bg-white rounded`}>
          <h5 className={`text-dark fw-semibold`}>Rating</h5>
          <div className={`ms-3 my-3`}>
            <button
              className={`btn border-primary border-2 text-dark rounded-0 fs-6`}
            >
              Any
            </button>
            <button
              className={`btn border-secondary border-2 text-dark rounded-0 fs-6`}
            >
              2.0+
            </button>
            <button
              className={`btn border-success border-2 text-dark rounded-0 fs-6`}
            >
              3.0+
            </button>
            <button
              className={`btn border-warning border-2 text-dark rounded-0 fs-6`}
            >
              4.0+
            </button>
          </div>
          <h5>Location</h5>
          <select className="form-select my-3">
            {options.map((item) => {
              return <option>{item.label}</option>;
            })}
          </select>
          <div className="mb-3">
            <input
              type="text"
              className="form-control py-4"
              placeholder="City or Zip code"
            />
          </div>
        </div>
        <div className={`col-lg-1`}></div>
        <div className={`col-lg-8 bg-light border`}>
{companies.map((item)=>{
  return(
  <div onClick={()=>{
    navigate('/review/'+item._id)
  }} className="rounded-3 mb-3 bg-white pb-3 px-3">
            <div className="d-flex py-3">
            <div className={`w-25`}>
              <img src={item.company_logo} className={`w-50`} alt="" />
            </div>
            <div>
              <h5 className={`text-dark fw-semibold`}>{item.company_name}</h5>
              <h6>Rating {item.company_rating} <i className={`fa fa-star border-right border-3 pe-5`}/>
              <span className={`ms-2`}>{item.company_reviews.length} Reviews</span>
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
            <div className={`border-start px-3 fw-semibold`}>{item.company_location}</div>
            </div>

          </div>
  )})}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
