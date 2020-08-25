import React from "react";

const ReposPagination = ({ page, setPage, lastPage }) => {
  return (
    <div>
      <div className="mx-auto mt-10 flex justify-center items-center gap-5">
        <button
          className="bg-blue-500 text-white px-2 py-1 hover:bg-blue-600 focus:outline-none"
          onClick={
            () => (page === 1 ? null : setPage((prevPage) => prevPage - 1)) // Change page
          }
          disabled={page === 1} // Disable button at page 1
        >
          Previous Page
        </button>
        {/* Page number Display */}
        {page}
        <button
          className="bg-blue-500 text-white px-2 py-1 hover:bg-blue-600 focus:outline-none"
          onClick={
            () =>
              page === lastPage ? null : setPage((prevPage) => prevPage + 1) // Change page
          }
          disabled={page === lastPage} // Disable button at last page
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ReposPagination;
