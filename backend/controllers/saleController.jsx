const Sale = require("../models/sale");
const Product = require("../models/product");

exports.createSale = async (req, res) => {
  const { buyer, products } = req.body;
  try {
    const sale = new Sale({ buyer, products });
    await sale.save();
    await Product.deleteMany({ _id: { $in: products } });
    res.json(sale);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.getSales = async (req, res) => {
  try {
    const sales = await Sale.find().populate("products");
    res.json(sales);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
