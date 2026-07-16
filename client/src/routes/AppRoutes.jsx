import { Routes, Route } from 'react-router-dom';

import CustomerLayout from '../layouts/CustomerLayout/CustomerLayout';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';

import Home from '../pages/customer/Home/Home';
import Products from '../pages/customer/Products/Products';
import ProductDetails from '../pages/customer/ProductDetails/ProductDetails';
import About from '../pages/customer/About/About';
import Contact from '../pages/customer/Contact/Contact';
import Login from '../pages/customer/Login/Login';
import Register from '../pages/customer/Register/Register';
import Profile from '../pages/customer/Profile/Profile';
import Orders from '../pages/customer/Orders/Orders';
import Wishlist from '../pages/customer/Wishlist/Wishlist';
import EmptyCart from '../pages/customer/Cart/EmptyCart';

import AdminDashboard from '../pages/admin/Dashboard/Dashboard';
import AdminProducts from '../pages/admin/Products/Products';
import AddProduct from '../pages/admin/AddProduct/AddProduct';
import EditProduct from '../pages/admin/EditProduct/EditProduct';
import AdminOrders from '../pages/admin/Orders/Orders';
import Customers from '../pages/admin/Customers/Customers';
import Analytics from '../pages/admin/Analytics/Analytics';
import Settings from '../pages/admin/Settings/Settings';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<CustomerLayout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:productId" element={<ProductDetails />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<Profile />} />
      <Route path="orders" element={<Orders />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="cart" element={<EmptyCart />} />
    </Route>

    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path="products" element={<AdminProducts />} />
      <Route path="products/add" element={<AddProduct />} />
      <Route path="products/:productId/edit" element={<EditProduct />} />
      <Route path="orders" element={<AdminOrders />} />
      <Route path="customers" element={<Customers />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  </Routes>
);

export default AppRoutes;
