const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const iocRoutes = require("./src/routes/iocRoutes");
const connectDB = require("./src/config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/iocs", iocRoutes);

app.get("/", (req, res) => {
  res.json({
    status: "running",
    project: "Threat Intelligence Platform"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});