// Smooth scrolling for navigation links
document.querySelectorAll('header nav a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
  });
});

// Handle form submission (stub)
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you, ' + form.querySelector('input[type=text]').value + '! We will contact you soon.');
  form.reset();
});
