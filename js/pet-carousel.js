async function obtenerPetsCarousel() {
  const resp = await fetch('/json/petsCarousel.json');
  const petListCarousel = await resp.json();

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

  for (let pet of petListCarousel) {
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

  for (let pet of petListCarousel) {
    petPopularList += popularPet(pet.imagen, pet.nombre, pet.precio);
  }
  document.getElementById("popular_pet").innerHTML = petPopularList;
}

obtenerPetsCarousel();
