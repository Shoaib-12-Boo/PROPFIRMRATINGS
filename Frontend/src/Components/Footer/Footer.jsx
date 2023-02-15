import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={`${style.background}`}>
        <div className={`container`}></div>
        <div className={`d-flex justify-content-evenly align-baseline `}>
          <div className={`text-white`}>
            <img className={`${style.logo}`} src="./logo.png" alt="" />
          </div>
          <ul className={`d-flex gap-4 text-white mt-5 ${style.list}`}>
            <p className={`fs-6`}>Explore:</p>
            <li>Crypto Widthdrawls</li>
            <li>Most Trustworthy</li>
            <li>Fastest</li>
            <li>Highest Payouts</li>
          </ul>
        </div>
        <div className={`text-center ${style.icons} mt-4`}>
        <i type="button" className={`fa-brands text-white ${style.icon} fa-facebook-f`}></i>
        <i type="button" className={`fa-brands text-white ${style.icon} fa-instagram`}></i>
        <i type="button" className={`fa-brands text-white ${style.icon} fa-linkedin`}></i>
        <i type="button" className={`fa-brands text-white ${style.icon} fa-twitter`}></i>
        <i type="button" className={`fa-brands text-white ${style.icon} fa-youtube`}></i>
        </div>
        <div className={`${style.foot_end} text-center text-white pt-2 mt-4 mb-0`}>
          <p>All rights reserved.PropFirmRatings.2020</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
