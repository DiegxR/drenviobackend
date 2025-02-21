import { Router } from "express";
import { addSpecialPrices, getSpecialPrices } from "../controllers/specialPricesController";

const router = Router();

// Ruta para obtener todos los productos

router.get("/specialPrices/:collectionName", getSpecialPrices);

router.post("/specialPrices/:collectionName", addSpecialPrices);

export default router;
