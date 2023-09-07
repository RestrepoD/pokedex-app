import "./Paginator.css";

const Paginator = ({ totalPages, onChangePage, onBackPage, onNextPage }) => {
  const pagesArray = Array(totalPages)
    .fill()
    .map((_, i) => i + 1);

  return (
    <div className="pages_cont">
      <button onClick={() => onBackPage()} className="change_btn">
        Back
      </button>
      <div className="page_numbers">
        {pagesArray.map((page) => (
          <button
            key={page}
            onClick={() => onChangePage(page)}
            className="pages_btn"
          >
            {page}
          </button>
        ))}
      </div>
      <button onClick={() => onNextPage()} className="change_btn">
        Next
      </button>
    </div>
  );
};

export default Paginator;
