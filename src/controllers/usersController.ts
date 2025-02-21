import { Request, Response } from "express";
import mongoose from "mongoose";
import { Usuario } from "../models/users";

export const requestUsers = async (req: Request, res: Response) => {
  try {
    const results = req.body;

    if (!results || !Array.isArray(results)) {
      res
        .status(400)
        .json({ mensaje: "El body solicitado debe ser un array válido." });
      return;
    }

    const usuariosProcesados = await Promise.all(
      results.map(async (usuario: any) => {
        const lastName = usuario.name?.last || "Unknown";

        const randomNumbers = Math.floor(Math.random() * 90 + 10);

        const collectionName = `precioEspecial${lastName}${randomNumbers}`;

        const nuevoUsuario = new Usuario({
          ...usuario,
          collectionName,
        });

        await nuevoUsuario.save();

        // Crear la nueva colección
        const nuevaColeccion = mongoose.connection.collection(collectionName);
        await nuevaColeccion.insertOne({
          mensaje: "Colección creada automáticamente",
        });

        return { ...usuario, collectionName };
      })
    );

    // Responder con éxito
    res.status(201).json({
      mensaje: "Usuarios procesados y colecciones creadas con éxito",
      data: usuariosProcesados,
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al procesar los usuarios", error });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json({
      mensaje: "Usuarios obtenidos con éxito",
      data: usuarios,
    });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los usuarios", error });
  }
};

export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const user = await Usuario.findOne({ email: email });
    if (!user) {
      res.status(500).json({ mensaje: "Error al obtener el usuarios" });
    }else{
      res.status(200).json({
        mensaje: "Usuario obtenido con éxito",
        data: user,
      });
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el usuarios", error });
  }
};
