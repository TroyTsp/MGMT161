function showScreen(mainId) {
    document.querySelectorAll('main').forEach(main => {
        main.style.display = 'none';
    });
    document.getElementById(mainId).style.display = 'flex';
}

function showDiv(mainId) {
    document.getElementById(mainId).style.display = 'flex';
}

function showText() {
    document.getElementById('sensei-message').value = '';
    document.querySelectorAll('sensei-text').forEach(main => {
        main.style.display = 'flex';});
}