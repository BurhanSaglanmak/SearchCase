import React, { useEffect, useState } from 'react'
import { useSearchContext } from "../../contexts/useSearchContext";
import location from "../../assets/images/location.png"
import OrderBy from '../OrderBy/OrderBy';
import PaginatedItems from '../Paginate/Paginate';

function SearchResults() {
    const { dataDetailMap, itemOffset,setItemOffset } = useSearchContext();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 1000);
        setItemOffset(0)
    }, [setLoading, loading,setItemOffset])
    return (
        <div className='SearchResultsCont'>
            <OrderBy />
            {dataDetailMap.length !== 0 ?
                dataDetailMap.slice(itemOffset * 10, itemOffset * 10+10).map((data, key) =>
                    <div key={key} className='SearchResultsCont__content'>
                        <div className='SearchResultsCont__content__right'>
                            <img src={location} alt='...' />
                            <div className='SearchResultsCont__content__right__context'>
                                <h2>{data.city}</h2>
                                <p>{data.country}</p>
                            </div>
                        </div>
                        <div className='SearchResultsCont__content__left'>
                            <h2>{data.name}</h2>
                            <h3>{data.date}</h3>
                        </div>
                    </div>
                ) :
                <div className='SearchResultsCont__content'>
                    <h2>{loading ? "Hatalı arama..." : "Loading.."}</h2>
                </div>
            }
           <PaginatedItems itemsPerPage={dataDetailMap} />
        </div>
    )
}

export default SearchResults