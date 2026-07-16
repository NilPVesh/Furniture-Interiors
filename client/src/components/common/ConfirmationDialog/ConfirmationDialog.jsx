import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './ConfirmationDialog.module.scss';

const ConfirmationDialog = ({
  isOpen = false,
  onClose,
  onConfirm,
  title = 'Are you sure?',
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'danger',
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title={title}
    footer={
      <>
        <Button variant="secondary" onClick={onClose}>{cancelLabel}</Button>
        <Button variant={variant} onClick={onConfirm}>{confirmLabel}</Button>
      </>
    }
  >
    {message ? <p className={styles.message}>{message}</p> : null}
  </Modal>
);

export default ConfirmationDialog;
