document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Vérifier si un thème est déjà sauvegardé ou utiliser le mode sombre par défaut
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Appliquer le thème initial
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
        themeToggle.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
        document.body.classList.remove('dark-mode');
        themeToggle.classList.remove('dark-mode');
    }

    // Initialiser le stockage local si nécessaire
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
    }

    // Gérer le clic sur le bouton
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');
        document.body.classList.toggle('dark-mode');
        themeToggle.classList.toggle('dark-mode');
        
        // Sauvegarder la préférence
        const isDarkMode = document.documentElement.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
}); 