import React from "react";
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
            {/* <div className="dropdown fixed-bottom-dropdown">
                <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://via.placeholder.com/50" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <span>Prop firm Review</span>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><Link className="dropdown-item" to="/profile"><i className="fa fa-user-circle" aria-hidden="true"></i> Profile</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/login"><i className="fa fa-sign-out" aria-hidden="true"></i> Sign out</Link></li>
                </ul>
            </div> */}
        </div>
    }

export default Sidebar;