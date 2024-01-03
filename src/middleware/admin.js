"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const admin = (req, res, next) => {
    if (req.headers.authorization === process.env.ADMIN_TOKEN)
        next();
    else
        return res.status(401).json({ message: "Unauthorized" });
};
exports.admin = admin;
