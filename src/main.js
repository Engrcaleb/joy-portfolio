import './style.css'

// Project filter functionality
document.addEventListener('DOMContentLoaded', () => {
  const filterInput = document.getElementById('projectFilter');
  const projectsContainer = document.getElementById('projectsContainer');
  
  if (filterInput && projectsContainer) {
    const projectCards = projectsContainer.querySelectorAll('[data-project]');

    filterInput.addEventListener('input', (e) => {
      const filterValue = e.target.value.toLowerCase();
      
      projectCards.forEach(card => {
        const projectName = card.getAttribute('data-project').toLowerCase();
        const projectTitle = card.querySelector('h3').textContent.toLowerCase();
        
        if (projectName.includes(filterValue) || projectTitle.includes(filterValue)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});
