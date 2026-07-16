import styles from './Checkbox.module.scss';

const Checkbox = ({
  checked,
  defaultChecked,
  onChange,
  label,
  name,
  id,
  disabled = false,
  className = '',
  ...rest
}) => {
  const isControlled = checked !== undefined;

  return (
    <label className={[styles.checkbox, className].filter(Boolean).join(' ')}>
      <input
        type="checkbox"
        name={name}
        id={id}
        {...(isControlled ? { checked, onChange } : { defaultChecked, onChange })}
        disabled={disabled}
        {...rest}
      />
      {label ? <span>{label}</span> : null}
    </label>
  );
};

export default Checkbox;
