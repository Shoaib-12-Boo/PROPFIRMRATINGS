import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import style from "./NavBar.module.css";
const NavBar = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const user = useSelector((store) => store.userSection);
  const [flag, setFlag] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const mobile = () => {
    setFlag((current) => !current);
  };
  const dispatch = useDispatch();
  return (
    <div className="">
      <div>
        <Toaster
          toastOptions={{ style: { padding: "16px" } }}
          position="top-center"
          reverseOrder={false}
        />
      </div>
      <div className={`d-flex ${style.minus} justify-content-around border`}>
        <div
          type="button"
          className={`${style.logo}`}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="./Assert/logo.png" alt="" />
        </div>
        <ul
          className={`gap-5 d-flex ${style.Pc} my-3 list-style-none ${style.cb}`}
        >
          <li type="button" className={`mt-2 fs-6 fw-semibold`}>
            <Link to={"/about"}>About</Link>
          </li>
          <li type="button" className={`mt-2 fs-6 fw-semibold`}>
            <Link to={"/categories"}>Categories</Link>
          </li>
          <li type="button">
            <button
              className={
                Object.keys(user).length !== 0
                  ? `btn btn-outline-danger px-4 py-2 fw-semibold fs-6 rounded-pill`
                  : `btn btn-outline-primary px-4 py-2 fw-semibold fs-6 rounded-pill`
              }
              onClick={() => {
                if (Object.keys(user).length !== 0) {
                  setDropdown((current) => !current);
                } else {
                  navigate("/login");
                }
              }}
            >
              {Object.keys(user).length !== 0 ? "Profile" : "Login"}
            </button>
          </li>
        </ul>
        <div className={`${style.Mobile} pt-3`}>
          <i onClick={mobile} className={`fa ${style.searchicon} fa-bars`} />
        </div>
      </div>
      <div
        onClick={() => {
          setDropdown(false);
        }}
        className={dropdown ? `pe-auto` : `pe-none`}
        style={{ width: "95vw", height: "100vh", position: "absolute" }}
      ></div>
      <div
        style={{ zIndex: 35 }}
        className={dropdown ? `position-absolute ${style.dropdown}` : `d-none`}
      >
        <ul>
          <li className={`mb-2`}>
            <Link
              onClick={() => {
                setDropdown(false);
              }}
              className={`fs-6 btn btn-outline-primary rounded-pill p-2`}
              to={"/user-profile"}
            >
              User Profile
            </Link>
          </li>{" "}
          <li>
            <button
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  navigate("/");
                  setDropdown(false);
                  localStorage.removeItem("sessionToken");
                  dispatch({
                    type: "LOG_OUT",
                  });

                  setLoading(false);
                }, 1000);
              }}
              className={`btn btn-outline-danger px-3 fw-semibold fs-6 rounded-pill`}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
      {/* Burger NavBar  */}
      <ul
        className={
          flag ? `list-style-none text-center ${style.mobile}` : `d-none`
        }
      >
        <li type="button" className={`mt-2 fs-5 fw-semibold`}>
          <Link to={"/about"}>About</Link>
        </li>
        <div className="border" />
        <li type="button" className={`mt-2 fs-5 fw-semibold`}>
          <Link to={"/categories"}>Categories</Link>
        </li>
        <div className="border" />
        <li type="button">
          <button
            className={
              Object.keys(user).length !== 0
                ? `btn btn-outline-danger px-4 py-2 fw-semibold fs-6 rounded-pill`
                : `btn btn-outline-primary px-4 py-2 fw-semibold fs-6 rounded-pill`
            }
            onClick={() => {
              if (Object.keys(user).length !== 0) {
                setDropdown((current) => !current);
              } else {
                navigate("/login");
              }
            }}
          >
            {Object.keys(user).length !== 0 ? "Profile" : "Login"}
          </button>
        </li>
      </ul>
      <div className={loading ? `d-block` : `d-none`}>
        <div
          className={`position-absolute bg-white opacity-75`}
          style={{ width: "98.9vw", height: "93vh", zIndex: 15 }}
        ></div>
        <div className={style.circle}>
          <div className={style.loader}></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
