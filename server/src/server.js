const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoutes.js");

const orderRoutes = require("./routes/orderRoutes.js");
const materialRoutes = require("./routes/materialRoutes.js");
const workstationRoutes = require("./routes/workstationRoutes.js");


dotenv.config() 
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/workstations", workstationRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)) 


module.exports = connectDB;
