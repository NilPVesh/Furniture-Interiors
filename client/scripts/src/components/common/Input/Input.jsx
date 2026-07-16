import styles from './Input.module.scss';

const Input = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  name,
  id,
  disabled = false,
  error,
  className = '',
  ...rest
}) => (
  <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
    <input
      className={[styles.input, error ? styles.hasError : ''].filter(Boolean).join(' ')}
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      aria-invalid={Boolean(error)}
      {...rest}
    />
    {error ? <span className={styles.errorText}>{error}</span> : null}
  </div>
);

export default Input;
