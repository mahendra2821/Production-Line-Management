const express = require("express");
const { updateMaterialStock } = require("../controllers/materialController.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.put("/:id", protect, updateMaterialStock);

module.exports =  router;
