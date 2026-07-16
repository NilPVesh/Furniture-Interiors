const express = require('express');
const { getProducts, createProduct, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const adminOnly = require('../middleware/adminMiddleware');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, getProducts);
router.post("/", protect, adminOnly,upload.single("image"), createProduct);
router.get("/:id", protect, getSingleProduct);
router.put("/:id", protect, adminOnly, updateProduct);
router.delete("/:id", protect, adminOnly, deleteProduct);

module.exports = router;