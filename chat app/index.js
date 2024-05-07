const toggleButton = document.querySelector('.dark-light');
const colors = document.querySelectorAll('.color');
const setting = document.querySelector('.setting_icon');
const chat_info = document.querySelector('.chat_info');

colors.forEach(color => {
  color.addEventListener('click', (e) => {
    colors.forEach(c => c.classList.remove('selected'));
    const theme = color.getAttribute('data-color');
    document.body.setAttribute('data-theme', theme);
    color.classList.add('selected');
  });
});

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

setting.addEventListener('click', () => {
  chat_info.classList.toggle('active');
});

