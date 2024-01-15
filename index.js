"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const item_1 = __importDefault(require("./src/routes/item"));
const file_1 = __importDefault(require("./src/routes/file"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 5000;
const corsConfig = {
    credentials: true,
    origin: "http://localhost:3000",
    optionSuccessStatus: "200",
};
app.use((0, compression_1.default)());
app.use((0, cors_1.default)(corsConfig));
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use("/items", item_1.default);
app.use("/files", file_1.default);
app.use("/images", express_1.default.static("./src/uploads"));
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});
app.use("/", (req, res) => {
    res.status(200).json({ message: "API Working Fine" });
});
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
    .connect(process.env.MONGO_URL)
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
});
function compression() {
    throw new Error("Function not implemented.");
}
