"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const itemSchema = new mongoose_1.default.Schema({
    fileId: { type: String, required: true },
    studentName: { type: String, required: true },
    itemTitle: { type: String, required: true },
    itemDescription: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: Number, required: true },
    secret: { type: String },
    category: {
        type: String,
        enum: ["LOST", "FOUND"],
        required: true,
    },
}, { timestamps: true });
exports.Item = mongoose_1.default.model("Item", itemSchema);
