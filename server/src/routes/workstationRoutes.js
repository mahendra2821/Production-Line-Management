const express =  require("express");
const { updateWorkstationStatus } = require("../controllers/workstationController.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.put("/:id", protect, updateWorkstationStatus);

module.exports =  router;
