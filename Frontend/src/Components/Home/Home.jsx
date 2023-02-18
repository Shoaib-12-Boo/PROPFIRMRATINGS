import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import style from "./Home.module.css";
import axios from "axios";

const Home = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let cryptoArr = [1, 2, 3, 4];
  const form = useForm();
  const navigate = useNavigate();
  const searchCompany = (data) => {
    navigate("/search-result/" + data.search);
  };

  useEffect(() => {
    axios.get("/get-recent-reviews").then((resp) => {
      console.log(resp.data);
    });
  }, []);

  return (
    <div>
      <div>
        <section className={`${style.backg}`}>
          <div
            className={`${style.navArea} justify-content-between align-items-center h-100 d-flex px-5`}
          >
            <div className={`${style.navdiv}`}>
              <h2 className={`text-white mb-5`}>
                FIND PROPS FIRMS YOU CAN TRUST <br /> FOR YOUR NEXT INVESTMENT
              </h2>
              <div className="mb-3 pe-5">
                <form onSubmit={form.handleSubmit(searchCompany)}>
                  <div
                    className={`bg-white rounded-pill pe-1 py-1 d-flex ps-3`}
                  >
                    <input
                      {...form.register("search")}
                      className={` ${style.navText} input border-0 w-75 py-2`}
                      placeholder="category"
                      type="text"
                    />
                    <button
                      className={`${style.navBtn} btn rounded-pill fs-6 py-1 ms-3 btn-primary`}
                    >
                      SEARCH
                    </button>
                    <button className={`${style.shotabtn}`}>
                      <i className={`fa  fa-magnifying-glass`} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className={`${style.navPic} px-3`}>
              <img className={``} src="./Assert/Phone.png" alt="" />
            </div>
          </div>
          {/* <div className={`${style.curve}`}></div> */}
        </section>
        <section>
          <div className={`container pt-5`}>
            <h2 className={`fw-bold ms-5 py-3`}>
              Explore by{" "}
              <span className={`${style.textcolor}`}>catagories</span>
            </h2>
            <div className={`d-flex flex-wrap p-4`}>
              <div
                className={`shadow fs-5 mx-3 fw-semibold px-5 py-3 my-3 bg-white rounded`}
              >
                Highest Payouts
              </div>
              <div
                className={`shadow fs-5 mx-3 fw-semibold px-5 py-3 my-3 bg-white rounded`}
              >
                Crypto Withdrawals
              </div>
              <div
                className={`shadow fs-5 mx-3 fw-semibold px-5 py-3 my-3 bg-white rounded`}
              >
                Fastest
              </div>
              <div
                className={`shadow fs-5 mx-3 fw-semibold px-5 py-3 my-3 bg-white rounded`}
              >
                Most Trustworthy
              </div>

              <div
                className={`shadow fs-5 mx-3 fw-semibold px-5 py-3 my-3 bg-white rounded`}
              >
                Country
              </div>
              <div
                className={`shadow fs-5 mx-3 fw-semibold px-5 py-3 my-3 bg-white rounded`}
              >
                New category
              </div>
              <div
                className={`shadow fs-5 mx-3 fw-semibold px-5 py-3 my-3 bg-white rounded`}
              >
                Another category
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={`container my-5 text-center`}>
            <h2 className={`my-5 fw-bold`}>
              Recent <span className={`${style.textcolor}`}>Reviews</span>
            </h2>
            <div
              className={`text-start d-flex container flex-wrap justify-content-center`}
            >
              {arr.map((item) => {
                return (
                  <div
                    key={item}
                    className="card-wrap col-md-5 col-lg-3 col-sm-6 shadow rounded-3 mb-2 px-3 py-3"
                  >
                    <div>
                      <div>
                        <span>
                          <i
                            className={`fa-solid fs-6 border ms-1 p-1 ${style.starbgGood} fa-sharp fa-star`}
                          />
                          <i
                            className={`fa-solid fs-6 border ms-1 p-1 ${style.starbgGood} fa-sharp fa-star`}
                          />
                          <i
                            className={`fa-solid fs-6 border ms-1 p-1 ${style.starbgGood} fa-sharp fa-star`}
                          />
                          <i
                            className={`fa-solid fs-6 border ms-1 p-1 ${style.starbgGood} fa-sharp fa-star`}
                          />
                          <i
                            className={`fa-solid fs-6 border ms-1 p-1 ${style.starbgGood} fa-sharp fa-star`}
                          />
                        </span>
                      </div>
                      <div className={`my-3`}>
                        <h5>Binance</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consequatur consectetur expedita debitis
                          corrupti aperiam non iste similique quae delectus
                          dicta?
                        </p>
                      </div>
                      <div className={`d-flex`}>
                        <div className={`rounded-circle bg-dark p-2`}>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <h6 className={`mt-2 ms-2`}>Adil Aijaz</h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section>
          <div className={`container py-3 my-5`}>
            <h2 className={`my-5 fw-bold ms-5`}>
              Top reviewed crypto
              <span className={`${style.textcolor}`}>wallets</span>
            </h2>
            <div
              className={`d-flex container justify-content-center flex-wrap text-center`}
            >
              {cryptoArr.map((item) => {
                return (
                  <div
                    key={item}
                    className={`border px-4 shadow rounded-3 col-lg-3 col-md-5 col-sm-7 py-4`}
                  >
                    <img
                      className={`${style.imgWidth}`}
                      src="./Assert/Crypto Logo.jpeg"
                      alt=""
                    />
                    <h4>Crypto.com</h4>
                    <div className={`my-3`}>
                      <span>
                        <i
                          className={`fa-solid fs-6 border ms-1 p-1 ${style.starbgGood} fa-sharp fa-star`}
                        />
                        <i
                          className={`fa-solid fs-6 border ms-1 p-1 ${style.starbgGood} fa-sharp fa-star`}
                        />
                        <i
                          className={`fa-solid fs-6 border ms-1 p-1 ${style.starbgGood} fa-sharp fa-star`}
                        />
                        <i
                          className={`fa-solid fs-6 border ms-1 p-1 ${style.starbgGood} fa-sharp fa-star`}
                        />
                        <i
                          className={`fa-solid fs-6 border ms-1 p-1 ${style.starbgGood} fa-sharp fa-star`}
                        />
                      </span>
                    </div>
                    <h6 className={`text-secondary mt-4`}>Coin supported:</h6>
                    <h6 className={`fw-normal`}>
                      BTC, ETH, LTC, BCH, SHIBA, DOGE, etc
                    </h6>
                    <button
                      className={`btn btn-outline-primary rounded-pill px-4 py-1 my-3`}
                    >
                      Read reviews
                    </button>
                    <button className={`btn fw-bold fs-6`}>
                      Visit Website <i className="fa-solid fa-arrow-right" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
