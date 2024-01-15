import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import compress from "compression";
import itemRoute from "./src/routes/item";
import fileRoute from "./src/routes/file";

dotenv.config();
const app = express();
const PORT: number = Number(process.env.PORT) || 5000;

app.use(compress());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/items", itemRoute);
app.use("/files", fileRoute);
app.use("/images", express.static("./src/uploads"));

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status: number = err.status || 500;
  const message: string = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.use("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "API Working Fine" });
});

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  });
function compression(): any {
  throw new Error("Function not implemented.");
}
