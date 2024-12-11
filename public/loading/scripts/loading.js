/** 

Loading - 100%

- load document - 25
- load whole page - 25

- load player data - 10
- load player settings - 10
- load game data - 10
- load timer - 10
- load events list - 10

*/

let currentProgress = 0;

function addLoadingScreen() {
    // Create the loading container
    const loadingContainer = document.createElement('div');
    loadingContainer.id = 'loading';
    loadingContainer.className = 'loading';

    // Create the loading logo image
    const loadingLogo = document.createElement('img');
    loadingLogo.className = 'loading-logo';
    loadingLogo.src = 'loading/img/game-logo.png';
    loadingLogo.alt = '';

    // Create the loading bottom container
    const loadingBottom = document.createElement('div');
    loadingBottom.className = 'loading-bottom';

    // Create the IDNLive logo image
    const loadingIdnLive = document.createElement('img');
    loadingIdnLive.className = 'loading-idnlive';
    loadingIdnLive.src = 'loading/img/idnlive-logo.webp';
    loadingIdnLive.alt = '';

    // Create the progress container
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';

    // Create the progress background
    const progressBackground = document.createElement('div');
    progressBackground.className = 'progress-background';

    // Create the progress value
    const progressValue = document.createElement('div');
    progressValue.className = 'progress-value';
    progressValue.style.width = '0%';

    // Append progress background and progress value to progress container
    progressContainer.appendChild(progressBackground);
    progressContainer.appendChild(progressValue);

    // Create the loading text container
    const loadingTextContainer = document.createElement('div');
    loadingTextContainer.className = 'loading-text';

    // Create the loading text span
    const loadingText = document.createElement('span');
    loadingText.id = 'loading-text-value';
    loadingText.textContent = 'Loading...';

    // Append loading text to loading text container
    loadingTextContainer.appendChild(loadingText);

    // Append all elements to the loading bottom container
    loadingBottom.appendChild(loadingIdnLive);
    loadingBottom.appendChild(progressContainer);
    loadingBottom.appendChild(loadingTextContainer);

    // Append loading logo and loading bottom to the loading container
    loadingContainer.appendChild(loadingLogo);
    loadingContainer.appendChild(loadingBottom);

    // Append the loading container to the body or any other desired parent element
    document.body.appendChild(loadingContainer);
}

function updateProgress(value, text = '') {
    currentProgress += value;

    const progressElement = document.querySelector('.progress-value');
    if (progressElement) {
        progressElement.style.width = currentProgress + '%';
    }

    if (text) {
        const progressTextElement = document.querySelector('#loading-text-value');
        if (progressTextElement) {
            progressTextElement.textContent = text;
        }
    }
}

addLoadingScreen();

window.addEventListener('DOMContentLoaded', () => {
    updateProgress(25, 'Load document completed');
});

window.addEventListener('load', () => {
    updateProgress(25, 'Load page completed');
});

window.addEventListener('updateloading', (event) => {
    updateProgress(event.detail.value, event.detail.text);
});

window.addEventListener('loadingfinish', () => {
    const loadingElement = document.querySelector('#loading');

    if (loadingElement) {
        loadingElement.classList.add('loading-hide');
        loadingElement.addEventListener('animationend', () => {
            loadingElement.remove();
        });
    }
});
