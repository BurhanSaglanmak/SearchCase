import React from "react";
import Logo from "../components/Logo/Logo";
import SearchBar from "../components/SearchBar/SearchBar";
import Slider from "../components/Slider/Slider";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useSearchContext } from "../contexts/useSearchContext";
function HomePage() {
  const { setNewRecordLink } = useSearchContext();

  function newRecordFunc() {
    setNewRecordLink("/")
  }
  return (
    <div>
      <main className="container homepage">
        <div className=" homepage__record">
          <Link to="/add-new-record">
            <button onClick={newRecordFunc}>
              Add new record
            </button>
          </Link>
        </div>
        <div className="homepage__logo">
          <Logo />
        </div>
        <div className="homepage__searchbar">
          <h1>Find in records</h1>
          <SearchBar />
        </div>
        <div className="homepage__newH1">
          <h1>Top News</h1>
        </div>
        <Slider />
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
