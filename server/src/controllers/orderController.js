const ProductionOrder =  require("../models/ProductionOrder.js");
// const Material = require("../models/Material.js");

const createOrder = async (req, res) => {
    if (req.user.role !== "Manager") {
        return res.status(403).json({ message: "Only managers can create orders" });
    }

    const { productName, quantity, priority, materialsUsed, workstationId } = req.body;

    try {
        const orderCount = await ProductionOrder.countDocuments();
        const orderId = `PROD-${String(orderCount + 1).padStart(3, "0")}`;

        const order = new ProductionOrder({
            orderId,
            productName,
            quantity,
            priority,
            materialsUsed,
            workstationId,
            createdBy: req.user._id
        });

        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: "Error creating order", error });
    }
};

const updateOrderStatus = async (req, res) => {
    const { status } = req.body;

    try {
        const order = await ProductionOrder.findById(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });

        order.status = status;
        await order.save();
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: "Error updating order", error });
    }
};

const deleteOrder = async (req, res) => {
    if (req.user.role !== "Manager") {
        return res.status(403).json({ message: "Only managers can delete orders" });
    }

    try {
        const order = await ProductionOrder.findById(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });

        await order.deleteOne();
        res.json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting order", error });
    }
};

module.exports =  { createOrder, updateOrderStatus, deleteOrder };
