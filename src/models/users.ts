import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
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

export const Usuario = mongoose.model("usuarios", UsuarioSchema);
