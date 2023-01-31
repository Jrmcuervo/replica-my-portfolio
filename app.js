var closeBtn = document.getElementsByClassName('menu__close');
var openBtn = document.getElementsByClassName('menu__open');
var span = document.getElementsByClassName('material-symbols-outlined')[0];

openBtn.onclick = function () {
    closeBtn.style.display = 'block';
};

span.onclick = function () {
    closeBtn.style.display = 'block';
};

window.onclick = function (event) {
    if (event.target == closeBtn) {
        closeBtn.style.display = 'none';
    }
};

// menu__open.addEventListener('click', () => {
//     menu__close.classList.toggle('open');
// });
