import React from 'react'
import { useSearchContext } from "../../contexts/useSearchContext";

function Success() {
  const {
    responsePost,successHide,
    setSuccesHide } = useSearchContext();
  function cancelFunc() {
    setSuccesHide(true)
  }

  return (
    <div>
      {responsePost === 201 && successHide === false && <div className='addNewRecord__error'>
          <div className='addNewRecord__error__cancel'>
            <h3 onClick={cancelFunc}>
              X
            </h3>
          </div>
          <div className='addNewRecord__error__content'>
            <h3>Your Request Success</h3>
            <div className='addNewRecord__error__content__successText'>
              <h2>{responsePost}</h2>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Success