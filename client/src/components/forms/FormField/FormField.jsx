import styles from './FormField.module.scss';

const FormField = ({ children, className = '' }) => (
  <div className={[styles.field, className].filter(Boolean).join(' ')}>{children}</div>
);

export default FormField;
