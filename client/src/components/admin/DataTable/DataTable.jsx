import Table from '../../common/Table/Table';
import styles from './DataTable.module.scss';

const DataTable = ({ title, toolbar, columns, rows, actions, emptyMessage, className = '' }) => (
  <section className={[styles.section, className].filter(Boolean).join(' ')}>
    {(title || toolbar) ? (
      <div className={styles.toolbar}>
        {title ? <h3>{title}</h3> : <span />}
        {toolbar}
      </div>
    ) : null}
    <Table columns={columns} rows={rows} actions={actions} emptyMessage={emptyMessage} />
  </section>
);

export default DataTable;
