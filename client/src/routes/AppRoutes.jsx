import { Routes, Route } from 'react-router-dom';
import Products from '../pages/Products/Products';
import ProductDetails from '../pages/Products/ProductDetails';
import ProtectedRoute from './ProtectedRoute';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRoutes = () => (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
        <Route path="/" element={<ProtectedRoute><Products /></ProtectedRoute>} />
        <Route path="/product/:productId" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
    </Routes>
);

export default AppRoutes;
