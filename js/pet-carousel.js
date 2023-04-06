const petsCarousel = [
  {
    id: 7,
    imagen:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61TUUBnBDnS.jpg",
    raza: "Beagle",
    nombre: "Kira",
    tamano: "Cachorro",
    precio: 0,
  },
  {
    id: 8,
    imagen:
      "https://i.pinimg.com/originals/13/93/f6/1393f645f31a0e0a807efbc1ab10c8de.jpg",
    raza: "Pastor Alemán",
    nombre: "Rosa",
    tamano: "Cachorro",
    precio: 0,
  },
  {
    id: 9,
    imagen:
      "https://images.squarespace-cdn.com/content/v1/568988da0e4c11c934a13f25/addbb171-753c-4b6a-96e0-17852ed40ca0/2b214f6d-b3a5-40d1-a939-91aa8884ef8f.jpg",
    raza: "Cocker",
    nombre: "Muñeca",
    tamano: "Adulto",
    precio: 0,
  },
  {
    id: 10,
    imagen:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bulldog-frances-1536054163.jpg?crop=1.00xw:0.834xh;0,0.0753xh&resize=980:*",
    raza: "Bulldog francés",
    nombre: "Firulais",
    tamano: "Cachorro",
    precio: 0,
  },
  {
    id: 11,
    imagen:
      "https://i.pinimg.com/564x/fb/6e/02/fb6e027359f4a9fd3fa8438922d74a4d.jpg",
    raza: "Bulldog",
    nombre: "Eren",
    tamano: "Cachorro",
    precio: 0,
  },
];

function generateCard(id, imagen, raza, nombre, tamano, precio) {
  return `
  <div class="col-lg-4">
  <div class="product__discount__item">
    <div
      class="product__discount__item__pic set-bg"
    >
    <img src="${imagen}">
      <div class="product__discount__percent">Popular</div>
    </div>
    <div class="product__discount__item__text">
      <span>${raza}</span>
      <h5><a href="#">${nombre}</a></h5>
      <div class="product__item__price">
        $${precio} <span>$40000</span>
      </div>
      <span>${tamano}</span>
    </div>
  </div>
</div>`;
}

function popularPet(imagen, nombre, precio) {
  return `
  <a href="#" class="latest-product__item">
    <div class="latest-product__item__pic">
      <img src="${imagen}" alt="" />
    </div>
    <div class="latest-product__item__text">
      <h6>${nombre}</h6>
      <span>$${precio}</span>
    </div>
  </a>`;
}

let petsCarouselList = "";
let petPopularList = "";

for (let pet of petsCarousel) {
  petsCarouselList += generateCard(
    pet.id,
    pet.imagen,
    pet.raza,
    pet.nombre,
    pet.tamano,
    pet.precio
  );
}
document.getElementById("pet-carousel").innerHTML = petsCarouselList;

for (let pet of petsCarousel) {
  petPopularList += popularPet(pet.imagen, pet.nombre, pet.precio);
}
document.getElementById("popular_pet").innerHTML = petPopularList;

// let countCarousel = 0;

// function agregarAlCarrito(id) {
//   console.log(id);
//   document.getElementById("add-pet-" + id).disabled = true;

//   Swal.fire({
//     position: "top-end",
//     icon: "success",
//     title: "Mascota añadida al carrito",
//     showConfirmButton: false,
//     timer: 1500,
//   });
//   countCarousel += 1;
//   document.getElementById("count-pets").innerHTML = countCarousel;
// }
