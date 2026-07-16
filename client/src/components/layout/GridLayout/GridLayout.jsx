import styles from './GridLayout.module.scss';

const GridLayout = ({ children, columns = 3, gap = 'md', className = '' }) => (
  <div
    className={[
      styles.grid,
      styles[`cols${columns}`],
      styles[`gap${gap}`],
      className,
    ].filter(Boolean).join(' ')}
  >
    {children}
  </div>
);

export default GridLayout;
