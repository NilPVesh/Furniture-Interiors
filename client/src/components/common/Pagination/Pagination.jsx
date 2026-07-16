import styles from './Pagination.module.scss';

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  className = '',
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className={[styles.pagination, className].filter(Boolean).join(' ')} aria-label="Pagination">
      <button
        type="button"
        className={styles.navBtn}
        disabled={currentPage <= 1}
        onClick={() => onPageChange?.(currentPage - 1)}
      >
        Prev
      </button>
      <ul className={styles.pages}>
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              className={[styles.pageBtn, page === currentPage ? styles.active : ''].filter(Boolean).join(' ')}
              onClick={() => onPageChange?.(page)}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={styles.navBtn}
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
