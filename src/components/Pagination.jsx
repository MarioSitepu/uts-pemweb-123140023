import React from 'react';

/**
 * Pagination Component
 * Menampilkan navigasi pagination untuk data yang dipaginasi
 * @param {Object} props - Component props
 * @param {number} props.currentPage - Halaman saat ini
 * @param {number} props.totalPages - Total jumlah halaman
 * @param {Function} props.onPageChange - Handler saat halaman berubah
 */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Jika hanya 1 halaman, jangan tampilkan pagination
  if (totalPages <= 1) return null;

  /**
   * Generate array page numbers untuk ditampilkan
   * Menampilkan max 5 halaman sekaligus
   */
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    // Adjust start page if we're near the end
    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="pagination" aria-label="Pagination navigation">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-button"
        aria-label="Previous page"
      >
        &laquo; Prev
      </button>
      
      {pageNumbers[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="pagination-button"
            aria-label="Go to page 1"
          >
            1
          </button>
          {pageNumbers[0] > 2 && <span className="pagination-ellipsis">...</span>}
        </>
      )}

      {pageNumbers.map(pageNum => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          className={`pagination-button ${currentPage === pageNum ? 'active' : ''}`}
          aria-label={`Go to page ${pageNum}`}
          aria-current={currentPage === pageNum ? 'page' : undefined}
        >
          {pageNum}
        </button>
      ))}

      {pageNumbers[pageNumbers.length - 1] < totalPages && (
        <>
          {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
            <span className="pagination-ellipsis">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="pagination-button"
            aria-label={`Go to page ${totalPages}`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-button"
        aria-label="Next page"
      >
        Next &raquo;
      </button>
    </div>
  );
};

export default Pagination;

