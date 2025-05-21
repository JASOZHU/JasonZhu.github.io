// Water cycle information
const cycleStages = {
    evaporation: {
        title: "Evaporation",
        description: "Evaporation is the process where water changes from a liquid to a gas (vapor). Heat from the sun causes water from oceans, lakes, and rivers to evaporate and rise into the atmosphere."
    },
    condensation: {
        title: "Condensation",
        description: "Condensation occurs when water vapor in the air cools and changes back into liquid water droplets. These droplets form clouds in the atmosphere."
    },
    precipitation: {
        title: "Precipitation",
        description: "Precipitation happens when water droplets in clouds become too heavy and fall back to Earth as rain, snow, sleet, or hail."
    },
    collection: {
        title: "Collection",
        description: "Collection refers to water gathering in oceans, lakes, rivers, and underground aquifers after precipitation. This collected water will eventually evaporate again, continuing the cycle."
    }
};

// Display stage information when buttons are clicked
document.querySelectorAll('.stage-btn').forEach(button => {
    button.addEventListener('click', () => {
        const stage = button.dataset.stage;
        const info = cycleStages[stage];
        
        const infoContainer = document.getElementById('stage-info');
        infoContainer.innerHTML = `
            <h2>${info.title}</h2>
            <p>${info.description}</p>
        `;
        
        // Highlight the active button
        document.querySelectorAll('.stage-btn').forEach(btn => {
            btn.style.backgroundColor = '#1e88e5';
        });
        button.style.backgroundColor = '#0d47a1';
    });
});

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

// Handle install prompt
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'block';
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        deferredPrompt = null;
        installBtn.style.display = 'none';
    }
});

window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    installBtn.style.display = 'none';
    deferredPrompt = null;
});