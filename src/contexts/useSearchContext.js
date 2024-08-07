import React, { createContext, useContext, useEffect, useState } from "react";
import data from "../assets/data/Data.json"

const SearchContext = createContext();


export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState("")
  const [dataMap, setDataMap] = useState([])
  const [dataDetailMap, setDataDetailMap] = useState([])
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
  const [idData, setIdData] = useState("")
  const [orderByName, setOrderByName] = useState("Order By")
  const [itemOffset, setItemOffset] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const resetSearch = () => {
    setItemOffset(0);
    // Additional reset logic if needed
  };
  useEffect(() => {
    const newData = [];

    data.data.forEach(item => {
      // Her bir öğe için yeni bir nesne oluşturun
      const newItem = {
        id: item[0],
        name: item[1],
        company: item[2],
        email: item[3],
        phone: item[4],
        website: item[5],
        country: item[6],
        city: item[7],
        date: item[8]
      };

      // Yeni nesneyi newData dizisine ekleyin
      newData.push(newItem);
    });
    if (searchData.trim() === "" && idData.trim() !== "") {
      setDataMap([])
    } else if (searchData.trim() !== "" || idData.trim() !== "") {
      const dataFilter = newData.filter(data => data.name.toLowerCase().includes(searchData.toLowerCase()))
      const dataDetailFilter = newData.filter(data => data.name.toLowerCase().includes(idData.toLowerCase()))

      // Sıralama işlemi
      if (orderByName === "Name ascending") {
        dataDetailFilter.sort((a, b) => a.name.localeCompare(b.name));
      } else if (orderByName === "Name descending") {
        dataDetailFilter.sort((a, b) => b.name.localeCompare(a.name));
      } else if (orderByName === "Year ascending") {
        dataDetailFilter.sort((a, b) => new Date(a.date) - new Date(b.date));
      } else if (orderByName === "Year descending") {
        dataDetailFilter.sort((a, b) => new Date(b.date) - new Date(a.date));
      }
      ///////////////
      setDataMap(dataFilter);
      setDataDetailMap(dataDetailFilter);
    } else {
      setDataMap([])
      setDataDetailMap([])
    }

  }, [searchData, idData, orderByName])
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
        searchData,
        setSearchData,
        dataMap,
        setDataMap,
        idData,
        setIdData,
        dataDetailMap,
        setDataDetailMap,
        orderByName,
        setOrderByName,
        itemOffset,
        setItemOffset,
        searchTerm,
        setSearchTerm,
        resetSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
