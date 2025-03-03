const mongoose = require("mongoose");

const materialSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    currentStock: { type: Number, required: true, min: 0 },
    minimumStockLevel: { type: Number, required: true }
}, { timestamps: true });

const Material = mongoose.model("Material", materialSchema);


module.exports = Material;
