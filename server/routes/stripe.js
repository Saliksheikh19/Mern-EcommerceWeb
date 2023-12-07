import express from "express";
import { processPayment } from "../controllers/stripeController.js";

const striperouter = express.Router();

// PROCESS PAYMENT
striperouter.post("/payment", processPayment);

export default striperouter;

