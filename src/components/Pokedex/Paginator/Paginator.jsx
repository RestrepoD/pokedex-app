const Paginator = ({ totalPages, onChangePage, onBackPage, onNextPage }) => {
  const pagesArray = Array(totalPages)
    .fill()
    .map((_, i) => i + 1);

  return (
    <div>
      <button onClick={() => onBackPage()}>Back</button>
      {pagesArray.map((page) => (
        <button key={page} onClick={() => onChangePage(page)}>
          {page}
        </button>
      ))}
      <button onClick={() => onNextPage()}>Next</button>
    </div>
  );
};

export default Paginator;
