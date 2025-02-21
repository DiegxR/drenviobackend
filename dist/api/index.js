"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const productsRouter_1 = __importDefault(require("../routes/productsRouter")); // Asegúrate de que la ruta sea correcta
const usersRouter_1 = __importDefault(require("../routes/usersRouter"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: '*', // Solo permitir solicitudes de este origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
};
app.use((0, cors_1.default)(corsOptions));
// Middleware para parsear el cuerpo de la solicitud como JSON
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Usar las rutas definidas para productos
app.use("/api/products", productsRouter_1.default);
app.use("/api/users", usersRouter_1.default);
const mongoURI = "mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/drenvioStore?retryWrites=true&w=majority"; // Tu URL de conexión
mongoose_1.default
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
