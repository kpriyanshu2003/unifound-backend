"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const file_1 = require("../controllers/file");
const admin_1 = require("../middleware/admin");
const router = express_1.default.Router();
router.get("/", file_1.getFiles);
router.delete("/delete/:id", [admin_1.admin], file_1.deleteFile);
exports.default = router;
