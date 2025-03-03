const express = require("express");
const { createOrder, updateOrderStatus, deleteOrder } =  require("../controllers/orderController.js");
const { protect } =  require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/", protect, createOrder);
router.put("/:id/status", protect, updateOrderStatus);
router.delete("/:id", protect, deleteOrder);

module.exports =  router;
