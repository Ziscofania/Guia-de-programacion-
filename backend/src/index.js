import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import recursosRoutes from "./routes/recursos.js";
import comentariosRoutes from "./routes/comentarios.js";
import itemsRoutes from "./routes/items.js"; 

const app = express();
const PORT = 3000;

const MONGO_URI = "mongodb://localhost:27017/miapp"; // cambia "miapp" por el nombre que prefieras

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error de conexión a MongoDB:", err));

app.use(cors());
app.use(express.json());

app.use("/api/recursos", recursosRoutes);
app.use("/api/comentarios", comentariosRoutes);
app.use("/api/items", itemsRoutes); // 👈 CRUD MongoDB nuevo

app.listen(PORT, () => {
  console.log(`🚀 Backend escuchando en http://localhost:${PORT}`);
});
