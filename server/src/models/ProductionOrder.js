const mongoose = require("mongoose")



const productionOrderSchema = mongoose.Schema({
    orderId: { type: String, unique: true },
    productName: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    priority: { type: String, enum: ["High", "Medium", "Low"], default: "Medium" },
    status: { 
        type: String, 
        enum: ["Planned", "In Production", "Quality Check", "Completed"], 
        default: "Planned"
    },
    materialsUsed: [
        {
            materialId: { type: mongoose.Schema.Types.ObjectId, ref: "Material" },
            quantity: { type: Number, required: true }
        }
    ],
    workstationId: { type: mongoose.Schema.Types.ObjectId, ref: "Workstation" },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

const ProductionOrder = mongoose.model("ProductionOrder", productionOrderSchema);



module.exports =  ProductionOrder;
