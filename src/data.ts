document.addEventListener('DOMContentLoaded', () => {
    const btnExpand = document.querySelectorAll('.expand-button');
    btnExpand.forEach((button) => {
      button.addEventListener('click', () => {
        const card = button.parentNode as HTMLElement;
        const description = card.querySelector('.description') as HTMLElement;
        description.classList.toggle('expand');
        button.textContent = description.classList.contains('expand') ? 'Expand...' : 'Recolh...';
      });
    });
});