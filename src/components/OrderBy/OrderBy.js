import React, { useEffect, useState, useRef } from 'react'
import arrow from "../../assets/images/arrow.png"
import { useSearchContext } from "../../contexts/useSearchContext";

function OrderBy() {
    const { orderByName,
        setOrderByName } = useSearchContext();
    const [orderByData, setOrderByData] = useState(false)
    const orderByRef = useRef(null);

    useEffect(() => {
        setOrderByName("Order By")
    }, [setOrderByName])

    function orderButton() {
        setOrderByData(!orderByData)
    }

    function nameAs() {
        setOrderByData(!orderByData)
        setOrderByName("Name ascending")
    }
    function nameDes() {
        setOrderByData(!orderByData)
        setOrderByName("Name descending")
    }
    function yearAs() {
        setOrderByData(!orderByData)
        setOrderByName("Year ascending")
    }
    function yearDes() {
        setOrderByData(!orderByData)
        setOrderByName("Year descending")
    }

    //////////////////komponent dışı kapat
    useEffect(() => {
        function handleClickOutside(event) {
            if (orderByRef.current && !orderByRef.current.contains(event.target)) {
                setOrderByData(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [orderByRef,setOrderByData]);

    return (
        <div className='OrderByCont' ref={orderByRef}>
            <div className='OrderByCont__context'>
                <button onClick={orderButton}>
                    <img src={arrow} alt='...' />
                    {orderByName}</button>
                {orderByData && <div className='OrderByCont__context__content'>
                    <h3 onClick={nameAs}>Name ascending</h3>
                    <h3 onClick={nameDes}>Name descending</h3>
                    <h3 onClick={yearAs}>Year ascending</h3>
                    <h3 onClick={yearDes}>Year descending</h3>
                </div>}
            </div>
        </div>
    )
}

export default OrderBy