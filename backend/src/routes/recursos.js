import express from "express";
const router = express.Router();

// Guardaremos recursos en memoria
let recursos = [
  { id: 1, titulo: "Guía HTML", tipo: "documentación", link: "https://developer.mozilla.org/es/docs/Web/HTML" },
  { id: 2, titulo: "Curso básico de Node.js", tipo: "video", link: "https://www.youtube.com/watch?v=TlB_eWDSMt4" },
  { id: 3, titulo: "Ejercicios de Python", tipo: "ejercicios", link: "https://www.w3schools.com/python/python_exercises.asp" }
];

// Obtener todos los recursos
router.get("/", (req, res) => {
  res.json(recursos);
});

// Obtener un recurso por ID
router.get("/:id", (req, res) => {
  const recurso = recursos.find(r => r.id === parseInt(req.params.id));
  if (!recurso) return res.status(404).json({ error: "Recurso no encontrado" });
  res.json(recurso);
});

// Agregar un recurso
router.post("/", (req, res) => {
  const { titulo, tipo, link } = req.body;
  if (!titulo || !tipo || !link) {
    return res.status(400).json({ error: "Faltan campos" });
  }
  const nuevo = { id: recursos.length + 1, titulo, tipo, link };
  recursos.push(nuevo);
  res.status(201).json(nuevo);
});

export default router;
