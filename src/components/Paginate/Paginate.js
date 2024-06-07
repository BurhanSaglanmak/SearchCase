import ReactPaginate from 'react-paginate';
import { useSearchContext } from "../../contexts/useSearchContext";


function PaginatedItems({ itemsPerPage }) {
    const { setItemOffset } = useSearchContext();

    const pageCount = Math.ceil(itemsPerPage.length / 10);

    const handlePageClick = (event) => {
        setItemOffset(event.selected + 1);
    };
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName='pagination'
            pageLinkClassName='page-num'
            previousLinkClassName='page-num'
            nextLinkClassName='page-num'
            activeLinkClassName='active'
        />
    );
}
export default PaginatedItems