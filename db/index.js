const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected");
  } catch (err) {
    console.log("Failed to connect to MongoDB:", err);
  }
};

module.exports = connectDb;
