import React from "react";
import style from './Login.module.css'

const Login = () => {
  return (
    <div className={`w-75 py-5 mx-auto`}>
      <div className={`w-50 mt-5 shadow text-center py-5 rounded-5 border m-auto`}>
        <h3 className={`fw-bold`}>
          Login using you <span className={`textcolor`}>favorite</span> wallet
        </h3>
        <div className={`d-flex shadow py-2 mt-5 mb-3 px-4 w-75 m-auto rounded-4 border`}>
          <img className={`${style.imgwidth} me-3`} src="./Assert/MetaMask.png" alt="" />
          <h5 className={`mt-2 fw-semibold`}>MetaMask</h5>
        </div>
        <div className={`d-flex shadow py-2 mb-3 px-4 w-75 m-auto rounded-4 border`}>
          <img className={`${style.imgwidth} me-3`} src="./Assert/Keplr.png" alt="" />
          <h5 className={`mt-2 fw-semibold`}>Keplr</h5>
        </div>
        <div className={`d-flex shadow py-2 mb-3 px-4 w-75 m-auto rounded-4 border`}>
          <img className={`${style.imgwidth} me-3`} src="./Assert/Coinbase.png" alt="" />
          <h5 className={`mt-2 fw-semibold`}>Coinbase</h5>
        </div>
        <div className={`d-flex shadow py-2 mb-3 px-4 w-75 m-auto rounded-4 border`}>
          <img className={`${style.imgwidth} me-3`} src="./Assert/Phantom.png" alt="" />
          <h5 className={`mt-2 fw-semibold`}>Phantom</h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
