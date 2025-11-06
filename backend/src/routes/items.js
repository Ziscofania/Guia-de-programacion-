// backend/routes/items.js
import express from "express";
import { Item } from "../models/Item.js";

const router = express.Router();

// Crear
router.post("/", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

// Leer todo
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Leer uno
router.get("/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
});

// Actualizar
router.put("/:id", async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
});

// Eliminar
router.delete("/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item eliminado" });
});

export default router;
