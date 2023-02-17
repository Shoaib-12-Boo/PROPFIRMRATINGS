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

function App() {

  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review/:companyId" element={<Review />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/write-review/:companyName/:companyId"
            element={<WriteReview />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/catagories" element={<Catagories />} />
          <Route path="/search-result/:search" element={<SearchResult />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
