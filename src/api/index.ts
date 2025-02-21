import express from "express";
import mongoose from "mongoose";
import productsRouter from "../routes/productsRouter"; // Asegúrate de que la ruta sea correcta
import usersRouter from "../routes/usersRouter";
import cors from "cors";
const app = express();
const corsOptions = {
  origin: '*', // Solo permitir solicitudes de este origen
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
};

app.use(cors(corsOptions));
// Middleware para parsear el cuerpo de la solicitud como JSON
app.use(express.json());
app.use(cors());
// Usar las rutas definidas para productos
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
const mongoURI =
  "mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/drenvioStore?retryWrites=true&w=majority"; // Tu URL de conexión

mongoose
  .connect(mongoURI, {})
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error);
  });

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
