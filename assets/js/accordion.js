document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.addEventListener('click', function(e) {
            // Si on clique sur un lien, ne pas déclencher l'accordéon
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            
            // Toggle la classe active sur la section cliquée
            this.classList.toggle('active');
            
            // Optionnel : fermer les autres sections
            sections.forEach(otherSection => {
                if (otherSection !== this && otherSection.classList.contains('active')) {
                    otherSection.classList.remove('active');
                }
            });
        });
    });
}); 