// Initialize the map and center it on the United States
var map = L.map('map').setView([37.8, -96], 4); // Coordinates for USA center, zoom level 4

// Add OpenStreetMap tiles as the base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// Add a sample fire marker (example: Los Angeles)
L.circle([34.05, -118.25], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10000 // 10 km radius
}).addTo(map).bindPopup("<b>Fire Detected!</b><br>Los Angeles Area.");

// Add another fire marker (example: San Francisco)
L.circle([37.77, -122.42], {
    color: 'orange',
    fillColor: '#f79',
    fillOpacity: 0.5,
    radius: 8000 // 8 km radius
}).addTo(map).bindPopup("<b>Fire Detected!</b><br>San Francisco Area.");
