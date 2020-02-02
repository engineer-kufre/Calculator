const dayMode_button = document.getElementById('day');
const darkMode_button = document.getElementById('dark');

darkMode_button.addEventListener('click', function () {
    document.getElementById('body').classList.add('night');
})
dayMode_button.addEventListener('click', function () {
    document.getElementById('body').classList.remove('night');
})