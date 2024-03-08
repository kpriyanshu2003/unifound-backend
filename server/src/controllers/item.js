"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItems = exports.getItem = exports.deleteItem = exports.addItem = void 0;
const item_js_1 = require("../models/item.js");
const addItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = req.file;
        const data = req.body;
        if (!file) {
            return res.status(400).json({ message: "File is required." });
        }
        const { filename, path } = file;
        const itemWithFile = new item_js_1.Item(Object.assign(Object.assign({}, data), { fileId: filename, file: {
                filename,
                path,
            } }));
        const savedItem = yield itemWithFile.save();
        return res.status(200).json(savedItem);
    }
    catch (error) {
        console.error("Error adding item:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.addItem = addItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield item_js_1.Item.findOneAndDelete({
            _id: req.params.id,
            secret: req.body.secret,
        });
        if (!item)
            return res.status(404).json({ message: "Item not found" });
        return res.status(200).json({ message: "Item deleted successfully", item });
    }
    catch (error) {
        console.error("Error deleting item:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.deleteItem = deleteItem;
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield item_js_1.Item.findById(req.params.id);
        if (!item)
            return res.status(404).json({ message: "Item not found" });
        return res.status(200).json(item);
    }
    catch (error) {
        console.error("Error fetching item:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.getItem = getItem;
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = req.query.category;
        if (!category || (category !== "LOST" && category !== "FOUND"))
            return res.status(400).json({ message: "Invalid category provided" });
        const items = yield item_js_1.Item.find({ category });
        return res.status(200).json(items);
    }
    catch (error) {
        console.error("Error fetching lost items:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.getItems = getItems;
