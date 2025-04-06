let clicks = 0;
document.querySelector('.save-world').addEventListener('click', function () {
    clicks++;
    const status = document.querySelector('.world-status');
    const button = document.querySelector('.save-world');

    if (clicks > 5) {
        status.innerHTML = 'Мир спасен! Ты герой! &#127881';
        document.body.style.background = "SpringGreen";

        button.style.opacity = '0';
        button.style.transition = 'opacity 0.9s ease';
        setTimeout(() => button.style.display = 'none', 500);

        startConfetti();
    } else {
        status.innerHTML = `Прогресс: ${clicks * 20}%`;
    }
});