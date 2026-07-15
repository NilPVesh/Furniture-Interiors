import { Routes, Route } from 'react-router-dom';
import Products from '../pages/Products/Products';
import ProductDetails from '../pages/Products/ProductDetails';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Products />} />
    <Route path="/product/:productId" element={<ProductDetails />} />
  </Routes>
);

export default AppRoutes;
