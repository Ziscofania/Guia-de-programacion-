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