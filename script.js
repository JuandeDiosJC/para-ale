const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const successMessage = document.getElementById('success-message');
const question = document.getElementById('question');
const buttonsContainer = document.getElementById('buttons-container');

function moveButton() {
    // Calculamos el tamaño de la pantalla para que el botón no se salga
    const containerRect = document.body.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    // Generamos posiciones aleatorias
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Movemos el botón
    btnNo.style.position = 'fixed';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}

// Eventos para escritorio y móviles
btnNo.addEventListener('mouseover', moveButton);
btnNo.addEventListener('touchstart', moveButton);

// Evento cuando dice que Sí
btnYes.addEventListener('click', () => {
    buttonsContainer.classList.add('hidden');
    question.classList.add('hidden');
    successMessage.classList.remove('hidden');
});