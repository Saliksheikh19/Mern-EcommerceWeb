import express from "express";
import {updateCart , deleteCart , getUserCart , getAllCarts , createCart} from "../controllers/cartController.js";
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "./verifyToken.js";

const Cartrouter = express.Router();

// CREATE CART
Cartrouter.post("/", verifyToken, createCart);

// UPDATE CART
Cartrouter.put("/:id", verifyTokenAndAuthorization, updateCart);

// DELETE CART
Cartrouter.delete("/:id", verifyTokenAndAuthorization, deleteCart);

// GET USER CART
Cartrouter.get("/find/:userId", verifyTokenAndAuthorization, getUserCart);

// GET ALL CARTS
Cartrouter.get("/", verifyTokenAndAdmin,getAllCarts);

export default Cartrouter;
