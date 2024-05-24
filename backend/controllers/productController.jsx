const Product = require("../models/product");

exports.addProduct = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const newProduct = new Product({ name, description, price });
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
