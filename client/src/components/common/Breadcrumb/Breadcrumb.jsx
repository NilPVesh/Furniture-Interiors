import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.scss';

const Breadcrumb = ({ items = [], className = '' }) => (
  <nav className={[styles.breadcrumb, className].filter(Boolean).join(' ')} aria-label="Breadcrumb">
    <ol>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={`${item.label}-${index}`}>
            {item.to && !isLast ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
            {!isLast ? <span className={styles.sep}>/</span> : null}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumb;
