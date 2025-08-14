document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carrousel').forEach(container => {
    const carousel = container.querySelector('.contenido-carrousel');
    const nextBtn = container.querySelector('.btn-carrusel.next');
    const prevBtn = container.querySelector('.btn-carrusel.prev');
    const card = carousel.querySelector('.card');
    const scrollAmount = card ? card.offsetWidth + 16 : 250;

    if (!carousel || !nextBtn || !prevBtn) return;

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  });
});
