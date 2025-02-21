"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const specialPricesController_1 = require("../controllers/specialPricesController");
const router = (0, express_1.Router)();
// Ruta para obtener todos los productos
router.get("/specialPrices/:collectionName", specialPricesController_1.getSpecialPrices);
router.post("/specialPrices/:collectionName", specialPricesController_1.addSpecialPrices);
exports.default = router;
