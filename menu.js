'use strict'

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('#menu-toggle');
    const menuPanel = document.querySelector('#start-menu-panel');

    // 1. Gérer le clic sur le bouton
    menuButton.addEventListener('click', function() {
        // Bascule la classe 'is-open' (ce qui change display: none en display: block)
        menuPanel.classList.toggle('is-open'); 
    });

    // 2. Optionnel mais Recommandé : Fermer le menu si l'on clique en dehors
    document.addEventListener('click', function(event) {
        const isClickInsidePanel = menuPanel.contains(event.target);
        const isClickOnButton = menuButton.contains(event.target);

        // Si le menu est ouvert ET que le clic est en dehors du panneau ET en dehors du bouton
        if (menuPanel.classList.contains('is-open') && !isClickInsidePanel && !isClickOnButton) {
            menuPanel.classList.remove('is-open');
        }
    });
});