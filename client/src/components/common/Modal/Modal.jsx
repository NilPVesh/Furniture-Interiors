import styles from './Modal.module.scss';

const Modal = ({ isOpen = false, onClose, title, children, footer, className = '' }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={[styles.modal, className].filter(Boolean).join(' ')}
        role="dialog"
        aria-modal="true"
        aria-label={title || 'Dialog'}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          {title ? <h3 className={styles.title}>{title}</h3> : <span />}
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className={styles.body}>{children}</div>
        {footer ? <div className={styles.footer}>{footer}</div> : null}
      </div>
    </div>
  );
};

export default Modal;
