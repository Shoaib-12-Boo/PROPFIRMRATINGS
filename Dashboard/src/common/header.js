import React, { useEffect, useState } from "react";

const Header = () => {
  let flag = true;
  let [sidebar, setSidebar] = useState(document.querySelector(".hellosidenav"));

  const mso = () => {
    if (sidebar) {
      if (flag) {
        sidebar.style.marginLeft = 0 + "px";
        flag = false;
    } else {
        sidebar.style.marginLeft = -15 + "rem";
        flag = true;
      }
    }
  };
  useEffect(() => {
    setSidebar(document.querySelector(".hellosidenav"));
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom">
      <div className="container-fluid">
        <h3 style={{}}>Dashboard</h3>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <button onClick={mso} className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
