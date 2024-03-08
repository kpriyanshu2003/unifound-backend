import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

export const admin = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization === process.env.ADMIN_TOKEN) next();
  else return res.status(401).json({ message: "Unauthorized" });
};
