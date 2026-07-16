import styles from './ValidationMessage.module.scss';

const ValidationMessage = ({ message, className = '' }) => {
  if (!message) return null;
  return <p className={[styles.message, className].filter(Boolean).join(' ')}>{message}</p>;
};

export default ValidationMessage;
