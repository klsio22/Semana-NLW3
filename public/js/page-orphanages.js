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

function addMarker({ id, name, lat, lng }) {
   //create popup orverlay
   const popup = L.popup({
      closeButton: false,
      className: "map-popup",
      minWidth: 240,
      minHeigth: 240,
   }).setContent(
      `${name}<a href= "/orphanage"id=${id}"> <img src ="/img/arrow-white.svg"></a>`
   );

   //create and add maker
   L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll(".orphanages span");
orphanagesSpan.forEach((span) => {
   const orphanages = {
      id: span.dataset.id,
      name: span.dataset.name,
      lat: span.dataset.lat,
      lng: span.dataset.lng,
   };

   addMarker(orphanages);
});
