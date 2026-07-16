import styles from './Checkbox.module.scss';

const Checkbox = ({
  checked = false,
  onChange,
  label,
  name,
  id,
  disabled = false,
  className = '',
  ...rest
}) => (
  <label className={[styles.checkbox, className].filter(Boolean).join(' ')}>
    <input
      type="checkbox"
      name={name}
      id={id}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    />
    {label ? <span>{label}</span> : null}
  </label>
);

export default Checkbox;
