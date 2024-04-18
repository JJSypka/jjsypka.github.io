// PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}

// Mapa
let map;

function initMap() {
    map = L.map('map').setView([50.06914, 19.9547], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
}

document.getElementById('mapButton').addEventListener('click', function() {
    document.getElementById('mapContainer').style.display = 'block';
    if (!map) {
        initMap();
    }
});

// SOS
document.getElementById('sosButton').addEventListener('click', function() {
    navigator.vibrate([100, 100, 100, 300, 300, 300, 100, 100, 100]);
});
