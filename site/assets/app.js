document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.signup-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    if (button) {
      button.textContent = 'Added';
      button.disabled = true;
    }
  });
});
