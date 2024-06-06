import React from "react";
import Logo from "../components/Logo/Logo";
import SearchBar from "../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useSearchContext } from "../contexts/useSearchContext";
import { useParams } from 'react-router-dom';

const SearchResultsPage = () => {
  const { setNewRecordLink } = useSearchContext();
  let { id } = useParams();
  function newRecordFunc() {
    setNewRecordLink("/search-results")
  }
  return (
    <main className="container">
      <nav className="navbar">
        <div className="navbar__logo">
          <Logo />
        </div>
        <div className="navbar__searchbar">
          <SearchBar />
        </div>
        <div className=" navbar__record">
          <Link to="/add-new-record">
            <button onClick={newRecordFunc}>
              Add new record
            </button>
          </Link>
        </div>
      </nav>
      <section>
        <div className="search-results">
        <h2>User ID: {id}</h2>
          {/* <SearchResults /> */}
        </div>
      </section>

    </main>
  );
};

export default SearchResultsPage;
