"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UsuarioSchema = new mongoose_1.default.Schema({
    gender: String,
    name: {
        title: String,
        first: String,
        last: String,
    },
    email: String,
    collectionName: String,
    picture: {
        large: String,
        medium: String,
        thumbnail: String,
    },
});
exports.Usuario = mongoose_1.default.model("usuarios", UsuarioSchema);
