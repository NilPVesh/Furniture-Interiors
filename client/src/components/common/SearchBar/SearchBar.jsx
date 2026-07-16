import styles from './SearchBar.module.scss';

const SearchBar = ({
  value,
  defaultValue = '',
  onChange,
  placeholder = 'Search...',
  onSubmit,
  className = '',
}) => {
  const isControlled = value !== undefined;

  return (
    <form
      className={[styles.search, className].filter(Boolean).join(' ')}
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        onSubmit?.(formData.get('q') ?? value ?? '');
      }}
    >
      <input
        type="search"
        name="q"
        {...(isControlled ? { value, onChange } : { defaultValue, onChange })}
        placeholder={placeholder}
        aria-label={placeholder}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
