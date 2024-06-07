import React, { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import search from "../../assets/images/search.png"
import location from "../../assets/images/location.png"
import { useSearchContext } from "../../contexts/useSearchContext";

function SearchBar() {
  const { searchData, setSearchData, dataMap, idData, setIdData, setSearchTerm, resetSearch } = useSearchContext();
  const locationdata = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const [errorClass, setErrorClass] = useState(false)
  const dataContainerRef = useRef(null);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        dataContainerRef.current &&
        !dataContainerRef.current.contains(event.target)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef, dataContainerRef]);

  useEffect(() => {
    if (dataMap.length === 0) {
      setShow(false)
    }
  }, [dataMap])

  useEffect(() => {
    if (idData !== "") {
      setSearchData(idData)
    }
    if (locationdata.pathname === "/") {
      setSearchData("")
      setIdData("")
    }
  }, [idData, setSearchData, locationdata, setIdData])

  const handleFocus = () => {
    setIsFocused(true);
  };

  function searchFunc() {
    if (searchData.trim() !== "" && dataMap.length !== 0) {
      setErrorClass(false)
      setSearchTerm(searchData);
      resetSearch(); // Reset pagination
      navigate(`/search-results/${searchData}`);
    } else {
      setErrorClass(true)
    }
  }
  function ShowButton() {
    setShow(!show)
  }
  return (
    <div className='searchBarCont'>
      <div className='searchBarCont__search'>
        <div className={!errorClass ? 'searchBarCont__search__input' : 'searchBarCont__search__inputError'}>
          <img src={search} alt='...' />
          <input placeholder='search..'
            ref={inputRef}
            onFocus={handleFocus}
            value={searchData}
            onChange={(e) => { setSearchData(e.target.value); setErrorClass(false) }} />
        </div>
        <button onClick={searchFunc} >Search</button>
      </div>
      {errorClass && <p className='searchBarCont__search__error'>Error</p>}
      {dataMap.length !== 0 && isFocused &&
        <div className='searchBarCont__search__data' ref={dataContainerRef}>
          {dataMap && dataMap.slice(0, show ? dataMap.length : 5).map((data, key) =>
            <div key={key} className='searchBarCont__search__data__context'>
              <img src={location} alt='...' />
              <div className='searchBarCont__search__data__context__content'>
                <h2>{data.name}</h2>
                <p>{data.country}, {data.city}</p>
              </div>
            </div>
          )}
          {dataMap.length > 5 && <button onClick={ShowButton}>{!show ? "Show More" : "Show Less"}</button>}
        </div>}
    </div>
  )
}

export default SearchBar