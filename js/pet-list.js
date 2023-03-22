const pets = [
  {
    imagen:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61TUUBnBDnS.jpg",
    raza: "Beagle",
    nombre: "Kira",
    tamano: "Cachorro",
    precio: 20000,
  },
  {
    imagen:
      "https://i.pinimg.com/originals/13/93/f6/1393f645f31a0e0a807efbc1ab10c8de.jpg",
    raza: "Pastor Alemán",
    nombre: "Rosa",
    tamano: "Cachorro",
    precio: 25000,
  },
  {
    imagen:
      "https://images.squarespace-cdn.com/content/v1/568988da0e4c11c934a13f25/addbb171-753c-4b6a-96e0-17852ed40ca0/2b214f6d-b3a5-40d1-a939-91aa8884ef8f.jpg",
    raza: "Cocker",
    nombre: "Muñeca",
    tamano: "Adulto",
    precio: 40000,
  },
  {
    imagen:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bulldog-frances-1536054163.jpg?crop=1.00xw:0.834xh;0,0.0753xh&resize=980:*",
    raza: "Bulldog francés",
    nombre: "Firulais",
    tamano: "Cachorro",
    precio: 30000,
  },
  {
    imagen:
      "https://i.pinimg.com/564x/fb/6e/02/fb6e027359f4a9fd3fa8438922d74a4d.jpg",
    raza: "Bulldog",
    nombre: "Eren",
    tamano: "Cachorro",
    precio: 35000,
  },
  {
    imagen:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1361347304-64101ee2f203b.jpg?crop=1xw:1xh;center,top&resize=980:*",
    raza: "Teckel",
    nombre: "Rodrigo",
    tamano: "Cachorro",
    precio: 20000,
  },
];

function generateCard(imagen, raza, nombre, tamano, precio) {
  return `
  <div class="col-lg-4 col-md-6 col-sm-6">
    <div class="product__item"> 
        <div
        class="product__item__pic set-bg"
        >
        <img src="${imagen}">
        <ul class="product__item__pic__hover">
            <li>
            <a href="#"><i class="fa fa-heart"></i></a>
            </li>
            <li>
            <a href="#"><i class="fa fa-retweet"></i></a>
            </li>
            <li>
            <a href="#"><i class="fa fa-shopping-cart"></i></a>
            </li>
        </ul>
        </div>
        <div class="product__discount__item__text">
            <span>${raza}</span>
            <h5><a href="#">${nombre}</a></h5>
            <div class="product__item__price">
            $${precio}
            </div>
            <span>${tamano}</span>
        </div>
    </div>
  </div>`;
}

let petsList = "";

for (let pet of pets) {
  petsList += generateCard(
    pet.imagen,
    pet.raza,
    pet.nombre,
    pet.tamano,
    pet.precio
  );
}
document.getElementById("container-pets").innerHTML = petsList;