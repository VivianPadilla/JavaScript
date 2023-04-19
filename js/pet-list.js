async function obtenerPets() {
  const resp = await fetch('/json/pets.json');
  const petList = await resp.json();

  function generateCard(id, imagen, raza, nombre, tamano, precio) {
    return `
    <div class="col-lg-4 col-md-6 col-sm-6">
      <div class="product__item"> 
          <div
          class="product__item__pic set-bg"
          >
          <img src="${imagen}">
          <ul class="product__item__pic__hover">
              <li>
              <button id="add-pet-${id}" onclick="agregarAlCarrito(${id},'${nombre}',${precio})"><i class="fa fa-shopping-cart"></i></button>
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

  /* list pets*/

  let petsList = "";

  for (let pet of petList) {
    petsList += generateCard(
      pet.id,
      pet.imagen,
      pet.raza,
      pet.nombre,
      pet.tamano,
      pet.precio
    );
  }
  document.getElementById("container-pets").innerHTML = petsList;
}

obtenerPets();

/* cart pets */

let count = 0;
let allPets = [];

function agregarAlCarrito(id, nombre, precio) {
  let total = 0;
  let allListPets = "";

  /* disabled button click */
  document.getElementById("add-pet-" + id).disabled = true;

  /* modal */
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Mascota añadida al carrito",
    showConfirmButton: false,
    timer: 1500,
  });

  /* count click cart pets */
  count += 1;
  document.getElementById("count-pets").innerHTML = count;

  const cartPets = {
    id: id,
    nombre: nombre,
    precio: precio,
  };

  allPets = [...allPets, cartPets];
  console.log("allPets", allPets);

  const items = (id, nombre, precio) =>
    `<div class="contentItem">
      <p>${nombre}</p>
      <p>$${precio}</p>
      <button type="button" class="btn-close" aria-label="Close" onClick="eliminarPet(${id}, '${nombre}', ${precio})">X</button>
    </div>`;

  for (let listPet of allPets) {
    total += listPet.precio;
    allListPets += items(listPet.id, listPet.nombre, listPet.precio);
  }

  document.getElementById("cartListPets").innerHTML = allListPets;
  document.getElementById("total").innerHTML = total;
}

// eliminar pet de la lista del carrito 

function eliminarPet(id, nombre, precio) {
  let allListPetsElim = "";
  let total = 0;
  const position = allPets.map(pet => pet.id).indexOf(id)
  console.log("position", position);
  allPets.splice(position, 1);
  console.log("allPets eliminaaarr", allPets);
  document.getElementById("add-pet-" + id).disabled = false;

  const itemsElim = (id, nombre, precio) =>
    `<div class="contentItem">
      <p>${nombre}</p>
      <p>$${precio}</p>
      <button type="button" class="btn-close" aria-label="Close" onClick="eliminarPet(${id}, '${nombre}', ${precio})">X</button>
    </div>`;

  for (let elimPet of allPets) {
    total += elimPet.precio;
    allListPetsElim += itemsElim(elimPet.id, elimPet.nombre, elimPet.precio);
  }

  document.getElementById("cartListPets").innerHTML = allListPetsElim;
  document.getElementById("total").innerHTML = total;
}
