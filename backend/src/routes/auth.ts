/*
import express from "express";
const router = express.Router();

import { register, login, updateUser } from "../controllers/auth";

console.log("Auth router");
router.post("/register", register);
router.post("/login", login);
router.patch("/updateUser", updateUser);

export default router;
*/

import express from "express";
const router = express.Router();

import { register, login, updateUser } from "../controllers/auth";

console.log("Auth router");
router.post("/register", register); // Add leading slash before route path
router.post("/login", login); // Add leading slash before route path
router.patch("/updateUser", updateUser); // Add leading slash before route path

export default router;
