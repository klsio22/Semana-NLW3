const options = {
   dragging: true,
   touchZoom: true,
   doubleClickZoom: false,
   scrollWheelZoom: false,
   zoomControl: true,
};

const map = L.map("mapid", options).setView([-27.222633, -49.6455874], 15);

//create and titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon

const icon = L.icon({
   iconUrl: "./public/img/map-marker.svg",
   iconSize: [58, 68],
   iconAnchor: [29, 68],
});

//create and add maker

let marker;

map.on("click", (event) => {
   console.log(event);

   const lat = event.latlng.lat;
   const lng = event.latlng.lng;

   // remove icon
   marker && map.removeLayer(marker)

   //add icon layer
   marker = L.marker([lat, lng], { icon }).addTo(map);
});
