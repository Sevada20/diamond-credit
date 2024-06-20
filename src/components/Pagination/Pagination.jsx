import styles from "./styles";

const Pagination = ({ currentPage = 1, totalPages = 10, onPageChange }) => {
  const classes = styles();

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className={classes.pagination}>
      <span onClick={handlePreviousPage} className={classes.arrow}>
        &lt;
      </span>
      <span className={classes.dots}>...</span>
      <span
        className={`${classes.pageNumber} ${
          currentPage === totalPages ? classes.active : ""
        }`}
        onClick={() => handlePageClick(totalPages)}
      >
        {totalPages}
      </span>
      <span onClick={handleNextPage} className={classes.arrow}>
        &gt;
      </span>
    </div>
  );
};

export default Pagination;
