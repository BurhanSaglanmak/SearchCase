import React from 'react'
import { useSearchContext } from "../../contexts/useSearchContext";

function Error() {
  const {
    errorMessages,
    errorCompHide,
    setErrorHideComp } = useSearchContext();
  // console.log(errorMessages);

  function cancelFunc() {
    setErrorHideComp(false)
  }

  return (
    <div>
      {errorCompHide === true && (errorMessages.nameSurname !== "" ||
        errorMessages.country !== "" ||
        errorMessages.city !== "" ||
        errorMessages.email !== "" ||
        errorMessages.website !== "") && <div className='addNewRecord__error'>
          <div className='addNewRecord__error__cancel'>
            <h3 onClick={cancelFunc}>
              X
            </h3>
          </div>
          <div className='addNewRecord__error__content'>
            <h3>Error while adding link element</h3>
            <div className='addNewRecord__error__content__errorText'>
              <h2>Error</h2>
            </div>
            {errorMessages.nameSurname !== "" && <p>Name Surname (only letters, min 4 – max 60 character)</p>}
            {errorMessages.country !== "" && <p>Country (only letters, min 2 – max 40 character)</p>}
            {errorMessages.city !== "" && <p>City (only letters, min 2 – max 40 character)</p>}
            {errorMessages.email !== "" && <p>Email validation is incorrect</p>}
            {errorMessages.website !== "" && <p>Website validation is incorrect</p>}

          </div>
        </div>}
    </div>
  )
}

export default Error