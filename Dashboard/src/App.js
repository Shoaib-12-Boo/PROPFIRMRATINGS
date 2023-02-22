import "font-awesome/css/font-awesome.min.css";
import "./assets/css/app.css";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/auth/LoginPage";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Users from "./pages/Users/Users";
import Reviews from "./pages/Reviews/Review";
import Company from "./pages/Company/Company";
import CompanyForm from "./pages/Company/CompanyForm";
import CompanyFormUpdate from "./pages/Company/CompanyFormUpdate";
import { useEffect, useState } from "react";
import axios from 'axios';


function App() {
  const [admin, setAdmin] = useState(false);
  const loginAdmin = async(data) => {
    let resp =await axios.post('/admin-login',data)
        if(resp.data.success){
            localStorage.setItem('adminToken',resp.data.token)
            setAdmin(true)
        }
  };
  const token = localStorage.getItem('adminToken')
  useEffect(()=>{
    if(token){
      axios.post('/admin-check-session',token).then((resp)=>{
        if(resp.data.success){
          setAdmin(true)
        }
      })
    }
  },[])

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={admin ? <DashboardPage /> : <Navigate to={"/admin/login"} />}
        />
        <Route
          exact
          path="/admin/login"
          element={
            admin ? (
              <Navigate to={"/"} />
            ) : (
              <LoginPage loginAdmin={loginAdmin} />
            )
          }
        />
        <Route
          exact
          path="/admin/companies"
          element={admin ? <Company /> : <Navigate to={"/admin/login"} />}
        />
        <Route
          exact
          path="/admin/companies/add"
          element={admin ? <CompanyForm /> : <Navigate to={"/admin/login"} />}
        />
        <Route
          exact
          path="/admin/companies/:edit"
          element={
            admin ? <CompanyFormUpdate /> : <Navigate to={"/admin/login"} />
          }
        />
        <Route
          exact
          path="/admin/users"
          element={admin ? <Users /> : <Navigate to={"/admin/login"} />}
        />
        <Route
          exact
          path="/admin/reviews"
          element={admin ? <Reviews /> : <Navigate to={"/admin/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
