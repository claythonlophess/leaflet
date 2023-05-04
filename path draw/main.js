var map = L.map('map').setView([-25.9239093,32.465802], 14);
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = null;
var line = L.polyline([]).addTo(map);

map.on('click', function(e){
    var point = {lat: -25.9239093, lng: 32.465802};
    if(!marker) {
        marker = L.marker(point).addTo(map);
    }
line.addLatLng(point);
});