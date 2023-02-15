import React from "react";
import style from "./About.module.css";
const About = () => {
  let arr = [1,2,3,4]
  return (
    <>

      <div className={`bg-light`}>
        <div className={`container p-5 ${style.aboutP} fs-6 `}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 bg-white border shadow rounded-3 p-4">
              <h2 className="rating pb-4">We are Prop Firm Ratings</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda illo maxime ipsa, totam alias hic ratione eligendi
                rerum unde soluta. amet consectetur adipisicing elit. Voluptatum
                sit eaque, veniam deleniti doloribus dignissimos perspiciatis
                impedit quasi id sequi.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum sit eaque, veniam deleniti doloribus dignissimos
                perspiciatis impedit quasi id sequi. veniam deleniti doloribus
              </p>
            </div>
            <div className="col-lg-6 text-center col-md-6 col-sm-12 border bg-white rounded-3 shadow">
              <h5 className="consumer text-muted mt-3">CONSUMERS</h5>
              <span>Share your experince</span>
              <div className="circle mt-4 pt-4">
                <span className="border rounded-circle py-4 px-4">
                  Lorem ipsum dolor sit amet.
                </span>
                <div className="ring-paragraph-bottom text-muted mt-4 pt-5">
                  BUISNESSES
                </div>
                <p>Create better experince</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className=" col-lg-6 col-md-6 col-sm-12 ">
              <img className="w-100 rounded-3 shadow" src="./Assert/peter.jpg" alt="" />
            </div>
            <div className="ceo col-lg-6 col-md-6 col-sm-12 pt-4 fs-6">
              <span className="ceo-paragraph text-center">
                “I started Trustpilot to give all consumers a powerful voice and
                all companies a way to listen, respond, and continually improve.
                That builds trust because this happens in a transparent
                environment with no pre-moderation or censorship.”
              </span>
              <h2 className="ceo-name mt-5">CEO Name.</h2>
              <p className="ceo-detail mt-3">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5 fs-6">
          <div className="container">
            <div className="row">
              <div className="slider-heading text-center mt-5">
                <h1>See what people are saying about Prop Firm Ratings</h1>
              </div>
              <div className=".slider-paragraph text-center mt-3">
                <p>
                  We aim to continuously improve, and every review helps us
                  provide better experiences for everyone.
                </p>
              </div>
            </div>{" "}
            <div
              className={`text-start d-flex container flex-wrap justify-content-center`}
            >
              {arr.map((item) => {
                return (
                  <div className="card-wrap col-md-5 col-lg-3 col-sm-6 shadow rounded-3 mb-2 px-3 py-3">
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
            
            <div className="rating text-center mt-4">
              Rating 4.4/5 Lorem, ipsum dolor.
            </div>
            <div className="prop text-center pb-5">Prop Firm Ratings</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
