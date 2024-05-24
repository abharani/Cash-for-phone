const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  buyer: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

module.exports = mongoose.model("Sale", SaleSchema);
