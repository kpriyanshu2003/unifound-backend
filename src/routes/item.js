"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const item_1 = require("../controllers/item");
const uuid_1 = require("uuid");
const router = express_1.default.Router();
const itemStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/uploads");
    },
    filename: (req, file, cb) => {
        const uniqueFilename = (0, uuid_1.v4)();
        const fileExtension = file.originalname.split(".").pop();
        const filename = `${uniqueFilename}.${fileExtension}`;
        cb(null, filename);
    },
});
const itemUpload = (0, multer_1.default)({ storage: itemStorage });
router.get("/", item_1.getItems);
router.get("/:id", item_1.getItem);
router.post("/add", itemUpload.single("file"), item_1.addItem);
router.delete("/:id", item_1.deleteItem);
exports.default = router;
