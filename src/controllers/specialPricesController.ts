import { Request, Response } from "express";
import mongoose from "mongoose";

export const getSpecialPrices = async (req: Request, res: Response) => {
  try {
    const { collectionName } = req.params;

    // Obtener la colección correspondiente
    const coleccion = mongoose.connection.collection(collectionName);
    const datos = await coleccion.find().toArray();

    if (!datos || datos.length === 0) {
      res.status(404).json({ mensaje: "Colección no encontrada o vacía" });
      return;
    }

    res.status(200).json({
      mensaje: `Datos de la colección ${collectionName}`,
      data: datos,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        mensaje: "Error al obtener la colección de precios especiales",
        error,
      });
  }
};

export const addSpecialPrices = async (req: Request, res: Response) => {
  try {
    const { collectionName } = req.params;
    const { productId, specialPrice } = req.body;

    if (!productId || !specialPrice) {
      res
        .status(400)
        .json({ mensaje: "El productoId y el precioEspecial son requeridos." });
      return;
    }

    const coleccion = mongoose.connection.collection(collectionName);

    const resultado = await coleccion.insertOne({
      productId,
      specialPrice,
    });

    res.status(201).json({
      mensaje: "Producto con precio especial agregado con éxito",
      data: resultado,
    });
  } catch (error) {;
    res
      .status(500)
      .json({
        mensaje: "Error al agregar el producto con precio especial",
        error,
      });
  }
};
