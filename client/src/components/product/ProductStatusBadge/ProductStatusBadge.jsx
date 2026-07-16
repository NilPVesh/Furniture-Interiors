import Badge from '../../common/Badge/Badge';

const statusVariantMap = {
  'In Stock': 'success',
  'Made to Order': 'walnut',
  'Out of Stock': 'danger',
  Draft: 'neutral',
  Active: 'success',
};

const ProductStatusBadge = ({ status = '', className = '' }) => (
  <Badge variant={statusVariantMap[status] || 'neutral'} className={className}>
    {status}
  </Badge>
);

export default ProductStatusBadge;
