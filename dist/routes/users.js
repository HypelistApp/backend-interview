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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../db/db"));
const validateUser_1 = __importDefault(require("../validate/validateUser"));
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
const router = express_1.default.Router();
// Get user by ID
router.get("/user/:id", (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield db_1.default.getUserById(parseInt(req.params.id, 10));
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
})));
// Create new user
router.post("/user", (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = (0, validateUser_1.default)(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    const newUser = yield db_1.default.createUser(req.body);
    res.status(201).json(newUser);
})));
exports.default = router;
