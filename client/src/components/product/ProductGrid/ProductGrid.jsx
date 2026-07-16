import GridLayout from '../../layout/GridLayout/GridLayout';
import ProductCard from '../ProductCard/ProductCard';
import EmptyState from '../../common/EmptyState/EmptyState';

const ProductGrid = ({ products = [], emptyTitle, emptyDescription, className = '' }) => {
  if (!products.length) {
    return <EmptyState title={emptyTitle || 'No products found'} description={emptyDescription} />;
  }

  return (
    <GridLayout columns={3} gap="md" className={className}>
      {products.map((product) => (
        <ProductCard key={product.id || product._id || product.name} {...product} />
      ))}
    </GridLayout>
  );
};

export default ProductGrid;
