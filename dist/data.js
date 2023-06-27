"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const btnExpand = document.querySelectorAll('.expand-button');
    btnExpand.forEach((button) => {
        button.addEventListener('click', () => {
            const card = button.parentNode;
            const description = card.querySelector('.description');
            description.classList.toggle('expand');
            button.textContent = description.classList.contains('expand') ? 'Expand...' : 'Recolh...';
        });
    });
});
//# sourceMappingURL=data.js.map