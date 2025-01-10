const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const connectDb = require("./db");
dotenv.config();
const adminRoutes = require("./routes/adminRoutes")

const app = express();
const PORT = process.env.PORT || 3000;
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/admin/", adminRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
