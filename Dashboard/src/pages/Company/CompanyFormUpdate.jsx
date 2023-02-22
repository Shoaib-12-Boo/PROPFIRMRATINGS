import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import adminLayout from "../../hoc/adminLayout";
import { useNavigate, useParams } from "react-router-dom";

const CompanyForm = () => {
  const Catagories = [
    "Animals Pets",
    "Events & Entertainment",
    "Home & Garden",
    "Resturant & Bars",
    "Beauty & Well-being",
    "Food, Beverage & Tobacco",
    "Home cervices",
    "Shopping & Fashion",
    "Business Cervices",
    "Legal Cervices & Government",
    "Sports",
    "Health & Medical",
    "Media & Publishing",
    "Travel & Vocations",
    "Money & Issuance",
    "Hobbies & Craft",
    "Education & Training",
    "Utilities",
    "Public & Local Services",
    "Vichies & Transportation",
    "Electronics & Technology",
  ];

  let [cata, setCata] = useState([]);
  const change = (e) => {
    let flag = true;
    for (let i = 0; i < cata.length; i++) {
      if (cata[i] === e.target.value) {
        flag = false;
        break;
      }
    }
    if (flag) {
      cata.push(e.target.value);
    }
    setCata([...cata]);
  };

  const param = useParams();
  const form = useForm();
  useEffect(() => {
    if (param) {
      axios.get("/for-update-company?id=" + param.edit).then((resp) => {
        form.reset(resp.data.company);
      });
    }
  }, [form,param]);
  const navigate = useNavigate()
  const formData = (data) => {
    let formG = new FormData()
    formG.append('company_category',cata);
    formG.append('company_coupon',data.company_coupon.split(" "));
    formG.append('company_rating',5);
    formG.append('company_name',data.company_name);
    formG.append('company_website',data.company_website);
    formG.append('company_location',data.company_location);
    formG.append('company_description',data.company_description);
    formG.append('company_reviews',[]);
    formG.append('company_logo',data.company_logo[0]);
    axios.post("/update-company", formG);
    form.reset();
    navigate('/admin/companies')
  };

  return (
    <div className={`toolHead`}>
      <div>
        <h2 className={`ms-5`}>Update Company</h2>
        <form
          onSubmit={form.handleSubmit(formData)}
          className={`w-75 border bg-light m-auto p-5`}
        >
          <div className="form-floating mb-3">
            <input
              {...form.register("company_name")}
              type="text"
              className="form-control"
              placeholder="Company Name"
            />
            <label for="floatingInput">Company Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              {...form.register("company_website")}
              type="text"
              className="form-control"
              placeholder="Company Website"
            />
            <label for="floatingInput">Company Website</label>
          </div>
          <div className="form-floating mb-3">
            <input
              {...form.register("company_location")}
              type="text"
              className="form-control"
              placeholder="Company Location"
            />
            <label for="floatingInput">Company Location</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              {...form.register("company_description")}
              rows="5"
              className="form-control"
              placeholder="Company Description"
            />
            <label for="floatingInput">Company Description</label>
          </div>
          <p className={`text-danger`}>
            <strong>Note:</strong> Every space means next coupon
          </p>
          <div className="form-floating mb-3">
            <input
              {...form.register("company_coupon")}
              type="text"
              className="form-control"
              placeholder="Company Coupons"
            />
            <label for="floatingInput">Company Coupons</label>
          </div>
          <div>
            <h6>Catagories</h6>
            <div className="bg-white p-3">
              {cata.map((item,index)=>{
                return(
                  <div className="d-inline-block rounded-pill px-2" style={{backgroundColor:'lightgray'}}>{item}<button onClick={()=>{cata.splice(index,1); setCata([...cata])}} className="btn rounded-circle">x</button></div>
                )
              })}
            </div>
            <select onChange={change} className={`form-select`}>
              {Catagories.map((item) => {
                return <option>{item}</option>;
              })}
            </select>
          </div>
          <div>
            <h5>Company Logo</h5>
            <div className="form-floating mb-3">
              <input
                {...form.register("company_logo")}
                type="file"
                placeholder="Company Name"
              />
            </div>
          </div>
          <div>
            <button className={`btn btn-primary px-5 py-2 fs-5`}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default adminLayout(CompanyForm);
