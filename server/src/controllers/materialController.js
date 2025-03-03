const Material = require("../models/Materials.js");

const updateMaterialStock = async (req, res) => {
    try {
        const material = await Material.findById(req.params.id);
        if (!material) return res.status(404).json({ message: "Material not found" });

        material.currentStock = req.body.currentStock;
        await material.save();
        res.json(material);
    } catch (error) {
        res.status(500).json({ message: "Error updating material stock", error });
    }
};

module.exports =  { updateMaterialStock };

