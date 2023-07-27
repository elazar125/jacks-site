document.querySelector('.backflip').addEventListener('click', () => {
  document.querySelector('body').classList.add('spin');
  setTimeout(() => {
    document.querySelector('body').classList.remove('spin');
  }, 2000);
});

document.querySelector('.backflips').addEventListener('click', () => {
  document.querySelector('body').classList.toggle('spin');
});

document.querySelector('.backflipz').addEventListener('click', () => {
  location.href = 'https://youtu.be/dQw4w9WgXcQ';
});