document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Manejo del formulario de contribución
    const uploadForm = document.getElementById('upload-form');
    if (uploadForm) {
        uploadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí iría la lógica para subir la guía
            const title = document.getElementById('guide-title').value;
            const category = document.getElementById('guide-category').value;
            const description = document.getElementById('guide-description').value;
            
            // Simulación de envío exitoso
            alert(`¡Gracias por tu contribución!\nHemos recibido tu guía "${title}" para la categoría ${category}.`);
            
            // Resetear el formulario
            uploadForm.reset();
        });
    }
    
    // Efecto de carga para las tarjetas de guías
    const guideCards = document.querySelectorAll('.guide-card');
    guideCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});
///A////////////////////////////////////////////////////////////
// URL del backend
const API_URL = "http://localhost:3000/api";

// ====== Recursos ======
async function cargarRecursos() {
  try {
    const res = await fetch(`${API_URL}/recursos`);
    const recursos = await res.json();

    const lista = document.getElementById("lista-recursos");
    lista.innerHTML = ""; // limpiar

    recursos.forEach(r => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${r.titulo}</strong> 
        [${r.tipo}] - 
        <a href="${r.link}" target="_blank">Ver recurso</a>
      `;
      lista.appendChild(li);
    });
  } catch (err) {
    console.error("Error cargando recursos:", err);
  }
}

// ====== Comentarios ======
async function cargarComentarios() {
  try {
    const res = await fetch(`${API_URL}/comentarios`);
    const comentarios = await res.json();

    const lista = document.getElementById("lista-comentarios");
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

// Manejar envío de formulario
document.getElementById("form-comentario").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("mensaje").value;

  try {
    await fetch(`${API_URL}/comentarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, mensaje })
    });

    document.getElementById("form-comentario").reset();
    cargarComentarios(); // refrescar lista
  } catch (err) {
    console.error("Error enviando comentario:", err);
  }
});

// ====== Inicialización ======
document.addEventListener("DOMContentLoaded", () => {
  cargarRecursos();
  cargarComentarios();
});
