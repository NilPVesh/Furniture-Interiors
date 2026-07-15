const express = require('express');
const { getProducts, createProduct, getSingleProduct } = require('../controllers/productController');

const router = express.Router();

router.get('/', getProducts);
router.post("/", createProduct);
router.get("/:id", getSingleProduct);

module.exports = router;