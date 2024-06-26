const express = require("express");
const { addProduct, getProducts } = require("../controllers/productController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, addProduct);
router.get("/", getProducts);

module.exports = router;
