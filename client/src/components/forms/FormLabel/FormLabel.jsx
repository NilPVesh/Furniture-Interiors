import styles from './FormLabel.module.scss';

const FormLabel = ({ children, htmlFor, required = false, className = '' }) => (
  <label htmlFor={htmlFor} className={[styles.label, className].filter(Boolean).join(' ')}>
    {children}
    {required ? <span className={styles.required} aria-hidden="true">*</span> : null}
  </label>
);

export default FormLabel;
