import styles from './RadioButton.module.scss';

const RadioButton = ({
  checked = false,
  onChange,
  label,
  name,
  value,
  id,
  disabled = false,
  className = '',
  ...rest
}) => (
  <label className={[styles.radio, className].filter(Boolean).join(' ')}>
    <input
      type="radio"
      name={name}
      id={id}
      value={value}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    />
    {label ? <span>{label}</span> : null}
  </label>
);

export default RadioButton;
