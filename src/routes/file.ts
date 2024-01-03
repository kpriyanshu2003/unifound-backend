import express, { Request, Response } from "express";
import { getFiles, deleteFile } from "../controllers/file";
import { admin } from "../middleware/admin";
const router = express.Router();

router.get("/", getFiles);
router.delete("/delete/:id", [admin], deleteFile);

export default router;
