import styles from './RadioButton.module.scss';

const RadioButton = ({
  checked,
  defaultChecked,
  onChange,
  label,
  name,
  value,
  id,
  disabled = false,
  className = '',
  ...rest
}) => {
  const isControlled = checked !== undefined;

  return (
    <label className={[styles.radio, className].filter(Boolean).join(' ')}>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        {...(isControlled ? { checked, onChange } : { defaultChecked, onChange })}
        disabled={disabled}
        {...rest}
      />
      {label ? <span>{label}</span> : null}
    </label>
  );
};

export default RadioButton;
