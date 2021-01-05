const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

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

function addPhotoField() {
   //pegar o conteiner de fotos #imagens
   const container = document.querySelector("#images");
   //pegar o conteiner para duplicar .new-image
   const fieldContainer = document.querySelectorAll(".new-upload");
   //realizar o clone da útima imagem adicionada.
   const newFieldContainer = fieldContainer[
      fieldContainer.length - 1
   ].cloneNode(true);
   //verificar se o campo está vazio , se sim , não adicionar ao conteiner de imagens
   const input = newFieldContainer.children[0];

   if (input.value == "") {
      return alert("Adicione uma imagem por favor!");
   }

   //limpar o campo antes de adicionar ao container de imagem
   input.value = "";

   //adicionar o clone ao cotainer de #imagens
   container.appendChild(newFieldContainer);
}
function deleteField(event) {
   //console.log(event.currentTarget) que está disparando o evento ? span

   const span = event.currentTarget;

   const fieldContainer = document.querySelectorAll(".new-upload");

   console.log(fieldContainer.length);

   if (fieldContainer.length < 2) {
      //limpar o valor do campo
      span.parentNode.children[0].value = "";
      return;
   }

   // deletar o campo
   console.log(span.parentNode);

   span.parentNode.remove();
}

//select yes or não
function toggleSelect(event) {
   //retirar a class .active (dos botões)
   const SelectButton = document.querySelectorAll(".button-select button")

   /* SelectButton.forEach(function(button){
      button.classList.remove('active')
   })  outra forma de fazer*/

   SelectButton.forEach((button) => button.classList.remove('active'))

   //colocar a class .active nesse botão clicando

   const button = event.currentTarget
   button.classList.add('active')
   //console.log(button)

   //atualizar o meu input hidden com o valor selecionado
   const input = document.querySelector('[name = "open_on_weekends"]')
   console.log(input)

   input.value = button.dataset.value
   
   //verificar se sim ou não
    
}
