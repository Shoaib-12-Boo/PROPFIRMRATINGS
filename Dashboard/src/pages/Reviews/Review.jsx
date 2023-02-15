import React, { useEffect, useState } from "react";
import style from "./Review.module.css";
import adminLayout from "../../hoc/adminLayout";
import axios from "axios";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("/get-admin-reviews").then((resp) => {
      setReviews(resp.data.reviews);
    });
  }, []);
  return (
    <>
      <div className={`mt-5`}>
        <div>
          <h1 className={`fs-3 my-3`}>Reviews</h1>
          <div className={`border `}>
            {reviews.map((item, index) => {
              return (
                <div className="card-wrap shadow rounded-3 mb-2 px-3 py-3">
                  <div>
                    <div>
                      <span>
                        <i
                          className={
                            item.rating >= 1
                              ? `fa fs-6 border ms-1 p-1 ${style.starbgGood} fa-sharp fa-star`
                              : `fa fs-6 border ms-1 p-1 ${style.starbg} fa-sharp fa-star`
                          }
                        />
                        <i
                          className={
                            item.rating >= 2
                              ? `fa fs-6 border ms-1 p-1 ${style.starbgGood} fa-sharp fa-star`
                              : `fa fs-6 border ms-1 p-1 ${style.starbg} fa-sharp fa-star`
                          }
                        />
                        <i
                          className={
                            item.rating >= 3
                              ? `fa fs-6 border ms-1 p-1 ${style.starbgGood} fa-sharp fa-star`
                              : `fa fs-6 border ms-1 p-1 ${style.starbg} fa-sharp fa-star`
                          }
                        />
                        <i
                          className={
                            item.rating >= 4
                              ? `fa fs-6 border ms-1 p-1 ${style.starbgGood} fa-sharp fa-star`
                              : `fa fs-6 border ms-1 p-1 ${style.starbg} fa-sharp fa-star`
                          }
                        />
                        <i
                          className={
                            item.rating == 5
                              ? `fa fs-6 border ms-1 p-1 ${style.starbgGood} fa-sharp fa-star`
                              : `fa fs-6 border ms-1 p-1 ${style.starbg} fa-sharp fa-star`
                          }
                        />
                      </span>
                    </div>
                    <div className={`my-3`}>
                      <div className={`d-flex justify-content-between`}>
                        <h5>{item.company_name}</h5>
                      </div>
                      <div className={`d-flex`}>
                        <div className={`rounded-circle bg-dark p-2`}>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <h6 className={`mt-2 ms-3 fw-semibold`}>
                          {item.user_name}
                        </h6>
                      </div>
                      <p className={`px-5`}>{item.review}</p>
                    </div>
                    <div className={`d-flex justify-content-end`}>
                      <button
                        onClick={async () => {
                          let obj = {id:item._id,review:item.review,company:item.company_name,user:item.user_name}
                          let resp = await axios.delete(
                            "/delete-review?obj="+obj
                          );
                          if (resp.data.success) {
                            reviews.splice(index, 1);
                            setReviews([...reviews]);
                          }
                        }}
                        className={`btn btn-danger btn-sm me-2`}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default adminLayout(Review);
