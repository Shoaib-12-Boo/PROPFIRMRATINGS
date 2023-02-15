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
import { useState } from "react";

function App() {
  const [admin, setAdmin] = useState(false);
  const loginAdmin = (e) => {
    e.preventDefault();
    let values = e.target;
    if (
      values.email.value === "demo@demo" &&
      values.password.value === "demo"
    ) {
      setAdmin(true);
    }
  };

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
