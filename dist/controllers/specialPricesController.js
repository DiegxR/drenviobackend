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
exports.addSpecialPrices = exports.getSpecialPrices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const getSpecialPrices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { collectionName } = req.params;
        // Obtener la colección correspondiente
        const coleccion = mongoose_1.default.connection.collection(collectionName);
        const datos = yield coleccion.find().toArray();
        if (!datos || datos.length === 0) {
            res.status(404).json({ mensaje: "Colección no encontrada o vacía" });
            return;
        }
        res.status(200).json({
            mensaje: `Datos de la colección ${collectionName}`,
            data: datos,
        });
    }
    catch (error) {
        res
            .status(500)
            .json({
            mensaje: "Error al obtener la colección de precios especiales",
            error,
        });
    }
});
exports.getSpecialPrices = getSpecialPrices;
const addSpecialPrices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { collectionName } = req.params;
        const { productId, specialPrice } = req.body;
        if (!productId || !specialPrice) {
            res
                .status(400)
                .json({ mensaje: "El productoId y el precioEspecial son requeridos." });
            return;
        }
        const coleccion = mongoose_1.default.connection.collection(collectionName);
        const resultado = yield coleccion.insertOne({
            productId,
            specialPrice,
        });
        res.status(201).json({
            mensaje: "Producto con precio especial agregado con éxito",
            data: resultado,
        });
    }
    catch (error) {
        ;
        res
            .status(500)
            .json({
            mensaje: "Error al agregar el producto con precio especial",
            error,
        });
    }
});
exports.addSpecialPrices = addSpecialPrices;
