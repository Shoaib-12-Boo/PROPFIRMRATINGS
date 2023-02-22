import React,{useState} from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom';

const Sidebar = () => {


        return <div className="border-end sidenav hellosidenav" style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.83),rgba(119, 22, 161, 1))'}} id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom ">
                <Link to="/">
                    <img alt="Alt content" className="w-100" src={require('./../assets/images/logo.png')} />
                </Link>
            </div>
            <PerfectScrollbar className="sidebar-items">
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <Link tag="a" className="fs-5 lh-lg" to="/">
                            <i className="fa fa-dashboard"></i> Dashboard
                        </Link>
                    </li>
                    <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <Link tag="a" className="fs-5 lh-lg" to="/admin/users">
                        <i className="fa fa-user"></i> Users
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="fs-5 lh-lg" to="/admin/companies">
                        <i className="fa fa-building"></i> Companies
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="fs-5 lh-lg" to="/admin/reviews">
                        <i className="fa fa-star"></i> Reviews
                        </Link>
                    </li>
                </ul>
            </PerfectScrollbar>
            <div className="dropdown fixed-bottom-dropdown text-center " style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.83),rgba(119, 22, 161, 1))'}}>
                <button onClick={()=>{
                    setTimeout(() => {
                        localStorage.removeItem("adminToken");
                        window.location.reload(false);
                      }, 1000);
                }} className="btn fw-bold btn-outline-danger">Log Out</button>
            </div>
        </div>
    }

export default Sidebar;