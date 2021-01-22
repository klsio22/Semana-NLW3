//create map
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

//create and titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon

const icon = L.icon({
  iconUrl: "/img/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [180, 2],
});

//
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeigth: 240,
}).setContent(
  'Lar das meninas <a href= "/orphanage" class = "choose-orphanage"> <img src ="/img/arrow-white.svg"></a>'
);

//create and add maker
L.marker([-27.222633, -49.6455874], { icon }).addTo(map).bindPopup(popup);
