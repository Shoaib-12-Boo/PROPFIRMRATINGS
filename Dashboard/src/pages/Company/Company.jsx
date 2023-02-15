import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import adminLayout from "../../hoc/adminLayout";


const Company = () => {
  const navigate = useNavigate()
  const [companies, setCompanies] = useState([]);
  const fetchCompanies = async () => {
    let resp = await axios.get("/get-companies");
    setCompanies(resp.data.companies);
  };
  useEffect(() => {
    fetchCompanies();
  }, []);
  return (
    <div className={`toolHead`}>
      <div>
        <div className={`d-flex justify-content-between py-3 px-4`}>
          <h1 className={`fw-bold text-dark`}>Companies</h1>
          <button className={`btn btn-primary py-0 fw-bold fs-6`}>
            <Link
              className={`text-decoration-none text-white`}
              to={"/admin/companies/add"}
            >
              <span className={`fs-4 p-0`}>+</span>Add Company{" "}
            </Link>
          </button>
        </div>
        <table className={`table border`}>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>description</th>
              <th>Location</th>
              <th>Rating</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((item,index) => {
              return (
                <tr>
                  <td>
                    <img style={{ width: "60px" }} src={item.company_logo} alt="" />
                  </td>
                  <td className={`fs-6 fw-semibold`}>{item.company_name}</td>
                  <td className={`fs-6 w-25`}>
                    {item.company_description}
                  </td>
                  <td className={`fs-6  fw-semibold`}>{item.company_location}</td>
                  <td className={`fs-6  fw-semibold`}>{item.company_rating}⭐</td>
                  <td>
                    <button className={`btn btn-success`} onClick={()=>{
                      navigate('/admin/companies/'+item._id)
                    }}>Update</button>
                  </td>
                  <td>
                    <button className={`btn btn-danger`} onClick={async()=>{
                      let resp = await axios.delete('/delete-company?id='+item._id)
                      if(resp.data.success){

                        companies.splice(index, 1);
                        setCompanies([...companies]);
                    }
                    }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default adminLayout(Company);
