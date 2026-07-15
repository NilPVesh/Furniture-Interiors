const product = require("../models/product");

const getProducts = async (req, res) => {
    const products = await product.find();
    res.json(products);
};

const createProduct = async (req, res) => {
    try {
        const products = await product.create(req.body);
        res.status(201).json({
            success: true,
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {getProducts, createProduct};