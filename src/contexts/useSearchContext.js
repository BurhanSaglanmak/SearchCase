import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();


export const SearchProvider = ({ children }) => {
  const [newRecordLink, setNewRecordLink] = useState("/");
  const [errorMessages, setErrorMessages] = useState({
    nameSurname: '',
    country: '',
    city: '',
    email: '',
    website: '',
  });
  const [errorCompHide, setErrorHideComp] = useState(false);
  const [responsePost, setResponsePost] = useState();
  const [successHide, setSuccesHide] = useState(false)
  return (
    <SearchContext.Provider
      value={{
        newRecordLink,
        setNewRecordLink,
        errorMessages,
        setErrorMessages, errorCompHide,
        setErrorHideComp, responsePost,
        setResponsePost,
        successHide,
        setSuccesHide,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
