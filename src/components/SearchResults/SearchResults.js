import React from 'react'
import { useSearchContext } from "../../contexts/useSearchContext";
import location from "../../assets/images/location.png"
import OrderBy from '../OrderBy/OrderBy';

function SearchResults() {
    const { dataDetailMap } = useSearchContext();
    return (
        <div className='SearchResultsCont'>
            <OrderBy />
            {dataDetailMap.length !== 0 ? dataDetailMap.map((data, key) =>
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
                    <h2>Hatalı arama...</h2>
                </div>
            }

        </div>
    )
}

export default SearchResults