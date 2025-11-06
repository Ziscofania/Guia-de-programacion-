import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
});

export const Item = mongoose.model("Item", itemSchema);
