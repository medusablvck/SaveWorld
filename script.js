let clicks = 0;
document.querySelector('.save-world').addEventListener('click', function () {
    clicks++;
    const status = document.querySelector('.world-status');
    const button = document.querySelector('.save-world');

    if (clicks > 5) {
        status.innerHTML = 'Мир спасен! Ты герой! &#127881';
        document.body.style.background = "SpringGreen";

        button.style.opacity = '0';
        button.style.transition = 'opacity 0.6s ease';

        setTimeout(() => 
            button.style.display = 'none', 500);
        const gif = document.createElement('img');
        gif.src = './assets/gif/gatito.gif'
        gif.style.width = '300px';
        gif.style.top = '50%';
        gif.style.left = '50%';
        gif.style.position = 'fixed';
        gif.style.transform = 'translate(-50%, -50%)';
        gif.style.zIndex = '1000';
        gif.style.borderRadius = '15px';
        document.body.appendChild(gif);
        
        startConfetti();
    } else {
        status.innerHTML = `Прогресс: ${clicks * 20}%`;
    }
});