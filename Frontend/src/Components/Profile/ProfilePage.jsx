import React from "react";
import { useSelector } from "react-redux";
import style from "./Profile.module.css";

const ProfilePage = () => {
  const user = useSelector((store) => store.userSection);

  return (
    <div>
      <div className={`${style.heroSec}`}></div>
      <div className={`position-relative text-center`}>
        <div className={`${style.avatar} position-absolute mx-auto`}>
          <img className={`w-100`} src="./Assert/user.png" alt="" />
        </div>

        <h3 className={`mt-3 fw-semibold`}>{user.user_name}</h3>
        <h5>{user.user_email}</h5>
      </div>
      <div>
        <div>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className={`d-flex justify-content-center flex-wrap gap-5`}>
              <div
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
                
                  <div
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

                  <div
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
                  </div>
              </div>
              <div className="carousel-item">
              <div className={`d-flex justify-content-center flex-wrap gap-5`}>
              <div
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
                
                  <div
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

                  <div
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
                  </div>
              </div>
              <div className="carousel-item">
              <div className={`d-flex justify-content-center flex-wrap gap-5`}>
              <div
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
                
                  <div
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

                  <div
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
                  </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
