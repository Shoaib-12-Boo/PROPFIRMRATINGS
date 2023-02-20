import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Registeration/Login";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignIn/SignUp";
import Review from "./Components/ReviewPage/Review";
import WriteReview from "./Components/WriteReview/WriteReview";
import About from "./Components/About/About";
import SearchResult from "./Components/SearchResult/SearchResult";
import Catagories from "./Components/Catagories/Catagories";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import ContactUs from "./Components/ContactUs/ContactUs";
import Varification from "./Components/Verification/Verification";

function App() {
  let token = localStorage.getItem("sessionToken");
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(token);
    let token1 = { token };
    if (token) {
      axios.post("/check-session", token1).then((resp) => {
        dispatch({
          type: "LOGINDATA",
          payload: resp.data.user,
        });
      });
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify/:token" element={<Home />} />
          <Route path="/review/:companyId" element={<Review />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/write-review/:companyName/:companyId"
            element={<WriteReview />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/catagories" element={<Catagories />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/verify" element={<Varification/>} />
          <Route path="/search-result/:search" element={<SearchResult />} />
         
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
