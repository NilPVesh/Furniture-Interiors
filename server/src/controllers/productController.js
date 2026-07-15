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

const getSingleProduct = async (req, res) => {
    try {
        const singleProduct = await product.findById(req.params.id);

        if (!singleProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            data: singleProduct
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const updatedIndividualProduct = await product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedIndividualProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        res.status(200).json({
            success: true,
            data: updatedIndividualProduct
        });
    }catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = { getProducts, createProduct, getSingleProduct, updateProduct, deleteProduct };