const Workstation = require("../models/Workstation.js");

const updateWorkstationStatus = async (req, res) => {
    try {
        const workstation = await Workstation.findById(req.params.id);
        if (!workstation) return res.status(404).json({ message: "Workstation not found" });

        workstation.status = req.body.status;
        await workstation.save();
        res.json(workstation);
    } catch (error) {
        res.status(500).json({ message: "Error updating workstation status", error });
    }
};

module.exports = { updateWorkstationStatus };
