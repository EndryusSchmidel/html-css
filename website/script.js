document.addEventListener('wheel', (event) => {
    const sections = document.querySelectorAll('section');
    const currentScroll = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Determina qual seção está no topo da viewport
    let currentSectionIndex = Math.round(currentScroll / viewportHeight);

    // Detecta direção do scroll
    if (event.deltaY > 0) {
        // Scroll para baixo
        currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
    } else {
        // Scroll para cima
        currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
    }

    // Rola suavemente para a próxima seção
    window.scrollTo({
        top: currentSectionIndex * viewportHeight,
        behavior: 'smooth'
    });
});