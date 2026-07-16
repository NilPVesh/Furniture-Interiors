import styles from './Select.module.scss';

const Select = ({
  value,
  onChange,
  options = [],
  placeholder = 'Select...',
  name,
  id,
  disabled = false,
  error,
  className = '',
  ...rest
}) => (
  <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
    <select
      className={[styles.select, error ? styles.hasError : ''].filter(Boolean).join(' ')}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      aria-invalid={Boolean(error)}
      {...rest}
    >
      {placeholder ? <option value="">{placeholder}</option> : null}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error ? <span className={styles.errorText}>{error}</span> : null}
  </div>
);

export default Select;
