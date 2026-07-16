import styles from './TextArea.module.scss';

const TextArea = ({
  value,
  defaultValue,
  onChange,
  placeholder,
  name,
  id,
  rows = 4,
  disabled = false,
  error,
  className = '',
  ...rest
}) => {
  const isControlled = value !== undefined;

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      <textarea
        className={[styles.textarea, error ? styles.hasError : ''].filter(Boolean).join(' ')}
        name={name}
        id={id}
        rows={rows}
        {...(isControlled ? { value, onChange } : { defaultValue, onChange })}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        {...rest}
      />
      {error ? <span className={styles.errorText}>{error}</span> : null}
    </div>
  );
};

export default TextArea;
