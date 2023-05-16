import express from "express";
import { createUSer, getUSers } from "./user.controller";

const router = express.Router();

router.get("/", getUSers);
router.post("/create-user", createUSer);

export default router;
