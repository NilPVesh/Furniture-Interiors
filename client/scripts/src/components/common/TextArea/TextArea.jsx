import styles from './TextArea.module.scss';

const TextArea = ({
  value,
  onChange,
  placeholder,
  name,
  id,
  rows = 4,
  disabled = false,
  error,
  className = '',
  ...rest
}) => (
  <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
    <textarea
      className={[styles.textarea, error ? styles.hasError : ''].filter(Boolean).join(' ')}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      aria-invalid={Boolean(error)}
      {...rest}
    />
    {error ? <span className={styles.errorText}>{error}</span> : null}
  </div>
);

export default TextArea;
