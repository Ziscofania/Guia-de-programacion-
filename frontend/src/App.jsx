import React, { useEffect, useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [nuevoItem, setNuevoItem] = useState("");

  // Obtener todos los items
  const cargarItems = async () => {
    const res = await fetch("http://localhost:3000/api/items");
    const data = await res.json();
    setItems(data);
  };

  // Crear nuevo item
  const crearItem = async () => {
    if (!nuevoItem.trim()) return;
    await fetch("http://localhost:3000/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: nuevoItem }),
    });
    setNuevoItem("");
    cargarItems();
  };

  // Eliminar item
  const eliminarItem = async (id) => {
    await fetch(`http://localhost:3000/api/items/${id}`, {
      method: "DELETE",
    });
    cargarItems();
  };

  useEffect(() => {
    cargarItems();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📦 CRUD con MongoDB</h1>

      <input
        value={nuevoItem}
        onChange={(e) => setNuevoItem(e.target.value)}
        placeholder="Nuevo item"
      />
      <button onClick={crearItem}>Agregar</button>

      <ul>
        {items.map((i) => (
          <li key={i._id}>
            {i.nombre}{" "}
            <button onClick={() => eliminarItem(i._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
