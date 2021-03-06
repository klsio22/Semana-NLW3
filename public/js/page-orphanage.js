const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//create map
const map = L.map("mapid", options).setView([-27.222633, -49.6455874], 15);

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
  'Lar das meninas <a href= "orphanage.html?id=1" class = "choose-orphanage"> <img src ="/img/arrow-white.svg"></a>'
);

//create and add maker
L.marker([-27.222633, -49.6455874], { icon }).addTo(map).bindPopup(popup);

function selectImage(event) {
  const button = event.currentTarget;

  //remover todas as classes .active
  buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
    console.log("Active removido com sucesso");
  }

  console.log(button.children);

  // selecinar imagem clicadas

  const image = button.children[0];
  const imageContainer  = document.querySelector(".orphanage-datails > img ")
  //Atualizar o container imagem

  imageContainer.src = image.src

  //adiconar a classe .active para este botão

  button.classList.add("active");
}
