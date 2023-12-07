import express from "express";
import {createOrder , updateOrder , deleteOrder , getUserOrders , getAllOrders ,getMonthlyIncome} from "../controllers/orderController.js";
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "./verifyToken.js";

const Orderrouter = express.Router();

// CREATE ORDER
Orderrouter.post("/", verifyToken, createOrder);

// UPDATE ORDER
Orderrouter.put("/:id", verifyTokenAndAdmin,updateOrder);

// DELETE ORDER
Orderrouter.delete("/:id", verifyTokenAndAdmin,deleteOrder);

// GET USER ORDERS
Orderrouter.get("/find/:userId", verifyTokenAndAuthorization,getUserOrders);

// GET ALL ORDERS
Orderrouter.get("/", verifyTokenAndAdmin,getAllOrders);

// GET MONTHLY INCOME
Orderrouter.get("/income", verifyTokenAndAdmin,getMonthlyIncome);

export default Orderrouter;
