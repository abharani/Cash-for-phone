const express = require("express");
const { createSale, getSales } = require("../controllers/saleController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, createSale);
router.get("/", getSales);

module.exports = router;
