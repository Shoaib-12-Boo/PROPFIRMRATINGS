import React from "react";
import { Link } from "react-router-dom";
import PieChart, { BarChart } from "../components/Chartjs";
import adminLayout from "../hoc/adminLayout"
import style from './Dashboard.module.css'

const DashboardPage = ()=>{
        return <>
            <div className="row">
        <div className="col-xl-4 col-sm-6 mb-3">
          <div className="card text-white o-hidden h-100" style={{backgroundImage:'linear-gradient(to top right, rgba(88, 115, 255, 1),rgba(73, 36, 151, 1))'}}>
            <div className="card-body">
              <div className="card-body-icon">
                <h3>Users</h3>
                <i className="fa fs-4 fa-user"></i>
                {/* <i className="fa fa-user"></i> */}
              </div>
              <div className="mr-5 fs-5 fw-bold">5000</div>
            </div>
            <Link to={'/admin/users'} className="card-footer text-white clearfix small z-1">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6 mb-3">
          <div className="card text-white o-hidden h-100" style={{backgroundImage:'linear-gradient(to top right, rgba(0, 127, 194, 1),rgba(73, 36, 151, 1))'}}>
            <div className="card-body">
              <div className="card-body-icon">
                <h3>Companies</h3>
                <i className="fa fs-4 fa-building"></i>
              </div>
              <div className="mr-5 fs-5 fw-bold">3000</div>
            </div>
            <Link to={'/admin/companies'} className="card-footer text-white clearfix small z-1">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6 mb-3">
          <div className="card text-white o-hidden h-100" style={{backgroundImage:'linear-gradient(to top right,rgba(73, 36, 151, 1), rgba(0, 150, 251,1))'}}>
            <div className="card-body">
              <div className="card-body-icon">
                <h3>Reviews</h3>
                <i className="fa fs-4 fa-star"></i>
              </div>
              <div className="mr-5 fs-5 fw-bold">6000</div>
            </div>
            <Link to={'/admin/reviews'} className="card-footer text-white clearfix small z-1">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className={`d-flex ${style.flexcolum}`}>
          <BarChart/>
          <PieChart/>
        </div>
      </div>
        </>
}

export default adminLayout(DashboardPage);