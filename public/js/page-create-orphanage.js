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
   document.querySelector("[name=lat]").value;
   document.querySelector("[name=lng]").value;

   // remove icon
   marker && map.removeLayer(marker);

   //add icon layer
   marker = L.marker([lat, lng], { icon }).addTo(map);
});

//add photo field

function addPhotoField(){

   //pegar o conteiner de fotos #imagens
   const container = document.querySelector('#images')
   //pegar o conteiner para duplicar .new-image
   const fieldContainer = document.querySelectorAll('.new-upload')
   //realizar o clone da útima imagem adicionada.
   const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true)
   //verificar se o campo está vazio , se sim , não adicionar ao conteiner de imagens
   const input = newFieldContainer.children[0]

   if (input.value == ""){
      return alert('Adicione uma imagem por favor!')
   }

   //limpar o campo antes de adicionar ao container de imagem
   input.value = ""

   //adicionar o clone ao cotainer de #imagens
   container.appendChild(newFieldContainer)

}
