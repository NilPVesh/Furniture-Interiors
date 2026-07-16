import styles from './Input.module.scss';

const Input = ({
  value,
  defaultValue,
  onChange,
  placeholder,
  type = 'text',
  name,
  id,
  disabled = false,
  error,
  className = '',
  ...rest
}) => {
  const isControlled = value !== undefined;

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      <input
        className={[styles.input, error ? styles.hasError : ''].filter(Boolean).join(' ')}
        type={type}
        name={name}
        id={id}
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

export default Input;
