import express from "express";
import {createProduct , updateProduct , deleteProduct , getAllProducts , getProductById} from "../controllers/productController.js";
import { verifyTokenAndAdmin } from "./verifyToken.js";

const productrouter = express.Router();

// CREATE PRODUCT
productrouter.post("/", verifyTokenAndAdmin, createProduct);

// UPDATE PRODUCT
productrouter.put("/:id", verifyTokenAndAdmin, updateProduct);

// DELETE PRODUCT
productrouter.delete("/:id", verifyTokenAndAdmin, deleteProduct);

// GET PRODUCT BY ID
productrouter.get("/find/:id",getProductById);

// GET ALL PRODUCTS
productrouter.get("/",getAllProducts);

export default productrouter;

