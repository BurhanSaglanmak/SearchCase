import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSearchContext } from '../../contexts/useSearchContext';

function PaginatedItems({ itemsPerPage }) {
    const { setItemOffset, searchTerm } = useSearchContext();
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setCurrentPage(0); // Reset page index 
    }, [searchTerm]);

    const pageCount = Math.ceil(itemsPerPage.length / 10);
    const handlePageClick = (event) => {
        setItemOffset(event.selected);
        setCurrentPage(event.selected);
    };
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName='pagination'
            pageLinkClassName='page-num'
            previousLinkClassName='page-num'
            nextLinkClassName='page-num'
            activeLinkClassName='active'
            forcePage={currentPage} // Ensure the current page is controlled
        />
    );
}

export default PaginatedItems;
