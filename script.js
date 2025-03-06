function showScreen(mainId) {
    document.querySelectorAll('main').forEach(main => {
        main.style.display = 'none';
    });
    document.getElementById(mainId).style.display = 'flex';
}

function showDiv(mainId) {
    document.getElementById(mainId).style.display = 'flex';
}