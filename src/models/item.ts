import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    fileId: { type: String, required: true },
    studentName: { type: String, required: true },
    itemTitle: { type: String, required: true },
    itemDescription: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: Number, required: false },
    secret: { type: String },
    category: {
      type: String,
      enum: ["LOST", "FOUND"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Item = mongoose.model("Item", itemSchema);
