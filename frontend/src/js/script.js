// ====================== CONFIGURACIÓN ======================
const API_URL = "http://localhost:3000/api";

// ====================== SCROLL SUAVE ======================
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Inicialización del contenido
  cargarRecursos();
  cargarComentarios();
});


// ====================== CRUD DE RECURSOS ======================

// Cargar todos los recursos desde MongoDB
async function cargarRecursos() {
  try {
    const res = await fetch(`${API_URL}/recursos`);
    const recursos = await res.json();

    const lista = document.getElementById("lista-recursos");
    if (!lista) return;
    lista.innerHTML = "";

    recursos.forEach(r => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${r.titulo}</strong> 
        (${r.categoria || "Sin categoría"}) - 
        <em>${r.descripcion || "Sin descripción"}</em>
        <button class="btn-eliminar" data-id="${r._id}">❌</button>
      `;
      lista.appendChild(li);
    });

    // Añadir eventos para eliminar
    document.querySelectorAll(".btn-eliminar").forEach(btn => {
      btn.addEventListener("click", async (e) => {
        const id = e.target.getAttribute("data-id");
        if (confirm("¿Seguro que quieres eliminar este recurso?")) {
          await eliminarRecurso(id);
          cargarRecursos();
        }
      });
    });

  } catch (err) {
    console.error("Error cargando recursos:", err);
  }
}

// Crear nuevo recurso (desde el formulario “Contribuye con el proyecto”)
const uploadForm = document.getElementById("upload-form");
if (uploadForm) {
  uploadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const titulo = document.getElementById("guide-title").value.trim();
    const categoria = document.getElementById("guide-category").value.trim();
    const descripcion = document.getElementById("guide-description").value.trim();

    if (!titulo) {
      alert("Por favor, ingresa un título.");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/recursos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, categoria, descripcion })
      });

      if (res.ok) {
        alert("✅ ¡Recurso agregado con éxito!");
        uploadForm.reset();
        cargarRecursos();
      } else {
        alert("❌ Error al enviar la guía.");
      }
    } catch (err) {
      console.error("Error enviando recurso:", err);
    }
  });
}

// Eliminar un recurso
async function eliminarRecurso(id) {
  try {
    await fetch(`${API_URL}/recursos/${id}`, {
      method: "DELETE"
    });
  } catch (err) {
    console.error("Error eliminando recurso:", err);
  }
}


// ====================== CRUD DE COMENTARIOS ======================

async function cargarComentarios() {
  try {
    const res = await fetch(`${API_URL}/comentarios`);
    const comentarios = await res.json();

    const lista = document.getElementById("lista-comentarios");
    if (!lista) return;
    lista.innerHTML = "";

    comentarios.forEach(c => {
      const li = document.createElement("li");
      li.textContent = `${c.nombre}: ${c.mensaje}`;
      lista.appendChild(li);
    });
  } catch (err) {
    console.error("Error cargando comentarios:", err);
  }
}

const formComentario = document.getElementById("form-comentario");
if (formComentario) {
  formComentario.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !mensaje) {
      alert("Por favor, llena todos los campos.");
      return;
    }

    try {
      await fetch(`${API_URL}/comentarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, mensaje })
      });
      formComentario.reset();
      cargarComentarios();
    } catch (err) {
      console.error("Error enviando comentario:", err);
    }
  });
}


// ====================== EFECTO VISUAL TARJETAS ======================
const guideCards = document.querySelectorAll(".guide-card");
guideCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  setTimeout(() => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 100 * index);
});
