const express = require('express');
const cors = require('cors');
const app = express();

const productRoutes = require('./routes/productRoutes');
const authRoutes =  require("./routes/authRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/auth", authRoutes);

module.exports = app;