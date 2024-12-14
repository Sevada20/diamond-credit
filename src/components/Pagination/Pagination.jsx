import ReactPaginate from "react-paginate";
import PaginationLeftArrow from "@/assets/icons/arrows/PaginationLeftArrow";
import useStyles from "./styles";
import PaginationRightArrow from "@/assets/icons/arrows/PaginationRightArrow";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const classes = useStyles();

  const handlePageClick = (data) => {
    handlePageChange(data.selected + 1);
  };

  return (
    <ReactPaginate
      containerClassName={classes.pagination}
      breakClassName={classes.paginationBreak}
      activeClassName={classes.paginationActive}
      pageClassName={classes.pageItem}
      pageLinkClassName={classes.pageLink}
      disabledClassName={classes.paginationDisabled}
      previousLinkClassName={classes.changePageBtn}
      nextLinkClassName={classes.changePageBtn}
      previousLabel={<PaginationLeftArrow />}
      nextLabel={<PaginationRightArrow />}
      breakLabel={"..."}
      pageCount={totalPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={4}
      onPageChange={handlePageClick}
      forcePage={currentPage - 1}
      disableInitialCallback={true}
    />
  );
};

export default Pagination;
