import React from 'react'
import Logo from '../components/Logo/Logo'
import arrow from "../assets/images/arrowAddPage.png"
import AddNewRecordComp from '../components/AddNewRecord/AddNewRecord'
import Error from '../components/Error/Error'
import { Link } from "react-router-dom";
import { useSearchContext } from "../contexts/useSearchContext";
import Success from '../components/Success/Success'

function AddNewRecord() {
  const { newRecordLink } = useSearchContext();

  return (
    <div className='addNewRecord'>
      <div className='addNewRecord__header'>
        <Logo />
        <Link to={newRecordLink === "/" ? "/" : "/search-results"}>
          <button>
            <img src={arrow} alt='...' />
            <h3>Return to {newRecordLink === "/" ? "Home" : "List"} Page</h3>
          </button>
        </Link>
      </div>
      <AddNewRecordComp />
      <div className='addNewRecord__errorContainer'>
        <Error />
      </div>
      <div className='addNewRecord__errorContainer'>
        <Success />
      </div>
    </div>
  )
}

export default AddNewRecord