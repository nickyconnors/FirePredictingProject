// Initialize the map and center it on the United States
var map = L.map('map').setView([37.8, -96], 4); // Coordinates for USA center, zoom level 4

// Add OpenStreetMap tiles as the base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// Example fire markers
const fireData = [
    { lat: 34.05, lon: -118.25, risk: 'High Risk' }, // Los Angeles
    { lat: 37.77, lon: -122.42, risk: 'Medium Risk' } // San Francisco
];

// Add markers for fire data. This is just a placeholder for now with the LA and SF markers used above. This will change once
// we get the predicting model finished.
fireData.forEach(fire => {
    const color = fire.risk === 'High Risk' ? 'red' : 'orange';
    L.circle([fire.lat, fire.lon], {
        color: color,
        fillColor: color,
        fillOpacity: 0.5,
        radius: 10000 // Example radius
    }).addTo(map).bindPopup(`<b>Fire Detected!</b><br>Risk Level: ${fire.risk}`);
});

// Function to get the user's current location
function locateUser() {
    if (navigator.geolocation) {
        // Request the user's location
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // Extract latitude and longitude
                const userLat = position.coords.latitude;
                const userLon = position.coords.longitude;

                // Add a marker for the user's location
                const userMarker = L.marker([userLat, userLon]).addTo(map);
                userMarker.bindPopup("<b>Your Location</b>").openPopup();

                // Center the map on the user's location
                map.setView([userLat, userLon], 10); // Zoom level 10
            },
            (error) => {
                // Handle errors (e.g., user denies location access)
                console.error("Error getting location:", error.message);
                alert("Unable to retrieve your location.");
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

// Call the function to locate the user
locateUser();
