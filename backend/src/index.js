import express from "express";
import cors from "cors";

import recursosRoutes from "./routes/recursos.js";
import comentariosRoutes from "./routes/comentarios.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/recursos", recursosRoutes);
app.use("/api/comentarios", comentariosRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Backend escuchando en http://localhost:${PORT}`);
});
