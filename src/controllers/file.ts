import { Request, Response } from "express";
import fs from "fs";
import path from "path";
const directoryPath = path.join(__dirname, "..", "uploads");

export const getFiles = async (req: Request, res: Response) => {
  const files = fs.readdirSync(directoryPath);
  res.status(200).json(files);
};

export const deleteFile = async (req: Request, res: Response) => {
  try {
    const fileName = req.params.id;
    fs.unlinkSync(`${directoryPath}/${fileName}`);
    res.status(200).json({ message: "File deleted successfully" });
  } catch (error) {
    console.error("Error deleting file:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
