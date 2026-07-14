const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server!" });
});

app.get("/health", (req, res) => {
    res.json({ status: "OK", message: "Server is healthy", timestamp: new Date().toISOString() });
});

app.get("/api/v1/products", (req, res) => {
  // Implementation for fetching products
  const products = [
    {
      id: 1,
      name: "Luxury Sofa",
      price: 45000,
      category: "Sofa",
      status: "Made To Order"
    },
    {
      id: 2,
      name: "Dining Table",
      price: 32000,
      category: "Table",
      status: "Available in 7 Days"
    },
    {
      id: 3,
      name: "King Size Bed",
      price: 55000,
      category: "Bed",
      status: "Out of Stock"
    }
  ];
  res.json(products);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});