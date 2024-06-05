import React from 'react'
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const navigate = useNavigate();

    function searchFunc(){
        navigate('/search-results');
    }
  return (
    <div>
        <button onClick={searchFunc}>search</button>
    </div>
  )
}

export default SearchBar