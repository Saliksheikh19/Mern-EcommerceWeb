// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const userRoute = require("./routes/user");
// const authRoute = require("./routes/auth");
// const productRoute = require("./routes/product");
// const cartRoute = require("./routes/cart");
// const orderRoute = require("./routes/order");
// const stripeRoute = require("./routes/stripe");
// const cors = require("cors");

// dotenv.config();

// const connect = () => {
//   mongoose
//       .connect("mongodb+srv://salik44sheikh:saliksalik@cluster0.oom4j1y.mongodb.net/?retryWrites=true&w=majority")
//       .then(() => {
//           console.log(`connected to DB`);
//       })
//       .catch((err) => {
//           throw err;
//       });
// };


// app.use(cors({
origin:"*"
}));
// app.use(express.json());
// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/products", productRoute);
// app.use("/api/carts", cartRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);

// app.listen(process.env.PORT || 5000, () => {
//   console.log("Backend server is running!");
//    connect()
// });

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";
import stripeRoute from "./routes/stripe.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to DB`);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(PORT, async () => {
  console.log(`Backend server is running on port ${PORT}!`);
  await connect();
});
