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
exports.getUserByEmail = exports.getUsers = exports.requestUsers = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = require("../models/users");
const requestUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = req.body;
        if (!results || !Array.isArray(results)) {
            res
                .status(400)
                .json({ mensaje: "El body solicitado debe ser un array válido." });
            return;
        }
        const usuariosProcesados = yield Promise.all(results.map((usuario) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const lastName = ((_a = usuario.name) === null || _a === void 0 ? void 0 : _a.last) || "Unknown";
            const randomNumbers = Math.floor(Math.random() * 90 + 10);
            const collectionName = `precioEspecial${lastName}${randomNumbers}`;
            const nuevoUsuario = new users_1.Usuario(Object.assign(Object.assign({}, usuario), { collectionName }));
            yield nuevoUsuario.save();
            // Crear la nueva colección
            const nuevaColeccion = mongoose_1.default.connection.collection(collectionName);
            yield nuevaColeccion.insertOne({
                mensaje: "Colección creada automáticamente",
            });
            return Object.assign(Object.assign({}, usuario), { collectionName });
        })));
        // Responder con éxito
        res.status(201).json({
            mensaje: "Usuarios procesados y colecciones creadas con éxito",
            data: usuariosProcesados,
        });
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al procesar los usuarios", error });
    }
});
exports.requestUsers = requestUsers;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield users_1.Usuario.find();
        res.status(200).json({
            mensaje: "Usuarios obtenidos con éxito",
            data: usuarios,
        });
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al obtener los usuarios", error });
    }
});
exports.getUsers = getUsers;
const getUserByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const user = yield users_1.Usuario.findOne({ email: email });
        if (!user) {
            res.status(500).json({ mensaje: "Error al obtener el usuarios" });
        }
        else {
            res.status(200).json({
                mensaje: "Usuario obtenido con éxito",
                data: user,
            });
        }
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al obtener el usuarios", error });
    }
});
exports.getUserByEmail = getUserByEmail;
