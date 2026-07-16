import styles from './Toast.module.scss';

const Toast = ({ type = 'info', message = '', visible = false, onClose, className = '' }) => {
  if (!visible) return null;

  return (
    <div
      className={[styles.toast, styles[type], className].filter(Boolean).join(' ')}
      role="status"
    >
      <span>{message}</span>
      {onClose ? (
        <button type="button" className={styles.close} onClick={onClose} aria-label="Dismiss">
          ×
        </button>
      ) : null}
    </div>
  );
};

export default Toast;
