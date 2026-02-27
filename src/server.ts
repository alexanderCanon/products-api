import express from "express";
import cors from "cors";
import { products } from "./data/products";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Neversion Products API" });
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

app.get("/products/category/:category", (req, res) => {
  const filtered = products.filter(
    p => p.category === req.params.category
  );
  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});