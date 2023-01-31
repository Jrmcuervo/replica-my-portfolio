const open = document.getElementById('btnOpen');
const close = document.getElementById('btnClose')

open.addEventListener('click', (event) => {
    close.style.display = 'block'

});

close.addEventListener('click', (event) => {
    close.style.display = 'none'

})
