import styles from './Table.module.scss';

const Table = ({ columns = [], rows = [], actions, emptyMessage = 'No data', className = '' }) => (
  <div className={[styles.tableWrap, className].filter(Boolean).join(' ')}>
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
          ))}
          {actions ? <th>Actions</th> : null}
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr>
            <td colSpan={columns.length + (actions ? 1 : 0)} className={styles.empty}>
              {emptyMessage}
            </td>
          </tr>
        ) : (
          rows.map((row) => (
            <tr key={row.id ?? JSON.stringify(row)}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
              {actions ? <td className={styles.actions}>{actions(row)}</td> : null}
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

export default Table;
