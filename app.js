const open = document.getElementById('btnOpen');
const close = document.getElementById('btnClose');

open.addEventListener('click', () => {
  close.style.display = 'block';
});

close.addEventListener('click', () => {
  close.style.display = 'none';
});
