import React from "react";
import { Pagination } from "react-bootstrap";

export default function PaginationPane({
  currentPage,
  productsPerPage,
  totalProducts,
  paginate,
}) {
  // Generate array of page numbers needed
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="pagination justify-content-center my-2">
      <Pagination.Item onClick={() => paginate(1)}>First</Pagination.Item>
      <Pagination.Item
        onClick={() => paginate(currentPage <= 50 ? 1 : currentPage - 50)}
      >
        {"‹‹"}
      </Pagination.Item>
      <Pagination.Prev
        onClick={() => paginate(currentPage === 1 ? 1 : currentPage - 1)}
      />
      {currentPage >= pageNumbers[pageNumbers.length - 4] && (
        <React.Fragment>
          <Pagination.Item onClick={() => paginate(pageNumbers[0])}>
            {pageNumbers[0]}
          </Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item onClick={() => paginate(currentPage - 2)}>
            {currentPage - 2}
          </Pagination.Item>
          <Pagination.Item onClick={() => paginate(currentPage - 1)}>
            {currentPage - 1}
          </Pagination.Item>
        </React.Fragment>
      )}
      <Pagination.Item active>{currentPage}</Pagination.Item>
      {currentPage < pageNumbers[pageNumbers.length - 3] && (
        <React.Fragment>
          <Pagination.Item onClick={() => paginate(currentPage + 1)}>
            {currentPage + 1}
          </Pagination.Item>
          <Pagination.Item onClick={() => paginate(currentPage + 2)}>
            {currentPage + 2}
          </Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item
            onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}
          >
            {pageNumbers[pageNumbers.length - 1]}
          </Pagination.Item>
        </React.Fragment>
      )}
      <Pagination.Next
        onClick={() =>
          paginate(
            currentPage === pageNumbers[pageNumbers.length - 1]
              ? currentPage
              : currentPage + 1
          )
        }
      />
      <Pagination.Item
        onClick={() =>
          paginate(
            currentPage >= pageNumbers[pageNumbers.length - 51]
              ? pageNumbers[pageNumbers.length - 1]
              : currentPage + 50
          )
        }
      >
        {"››"}
      </Pagination.Item>
      <Pagination.Item
        onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}
      >
        Last
      </Pagination.Item>
    </Pagination>
  );
}
