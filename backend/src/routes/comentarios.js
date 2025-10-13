import express from "express";
const router = express.Router();

let comentarios = [];

// Obtener comentarios
router.get("/", (req, res) => {
  res.json(comentarios);
});

// Agregar un comentario
router.post("/", (req, res) => {
  const { nombre, mensaje } = req.body;
  if (!nombre || !mensaje) {
    return res.status(400).json({ error: "Faltan campos" });
  }
  const nuevo = { id: comentarios.length + 1, nombre, mensaje };
  comentarios.push(nuevo);
  res.status(201).json(nuevo);
});

export default router;
