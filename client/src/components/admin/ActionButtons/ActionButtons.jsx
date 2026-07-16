import Button from '../../common/Button/Button';
import styles from './ActionButtons.module.scss';

const ActionButtons = ({
  onEdit,
  onDelete,
  onView,
  editLabel = 'Edit',
  deleteLabel = 'Delete',
  viewLabel = 'View',
  className = '',
}) => (
  <div className={[styles.actions, className].filter(Boolean).join(' ')}>
    {onView ? <Button size="sm" variant="ghost" onClick={onView}>{viewLabel}</Button> : null}
    {onEdit ? <Button size="sm" variant="secondary" onClick={onEdit}>{editLabel}</Button> : null}
    {onDelete ? <Button size="sm" variant="danger" onClick={onDelete}>{deleteLabel}</Button> : null}
  </div>
);

export default ActionButtons;
