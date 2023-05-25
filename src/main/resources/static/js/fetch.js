let productos;
let divHamburguesas = document.getElementById("burguers");
let divPostres = document.getElementById("postres");
let divBebidas = document.getElementById("bebidas");
let divComplementos = document.getElementById("complementos");
let divAlcohol = document.getElementById("bebidasAlcoholicas");
let hmtlHamburguesas = "";
let htmlPostres = "";
let htmlBebidas = "";
let htmlComplementos = "";
let htmlAlcohol = "";


// Aquí se debe cambiar el URL del servicio en el BackEnd
const URL_MAIN ='/api/producto/';
function addItems(div_Productos) {
    fetch(URL_MAIN, {
        method: 'get'
    }).then(function(response) {
        response.json().then(function (json) {
            console.log(json);
            console.log(json.length);
            productos=json;
            Array.from(json).forEach((p, index) => {
                switch (p.cate_nombre) {
      case "Hamburguesas":
        hmtlHamburguesas += `<div class="card">
               <img src="${p.img}" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title"><strong>${p.nombre}</strong></h5>
                 <p class="card-description">${p.descripción}</p>
                 <p class="card-text"><strong>$ ${p.precio}</strong></p>
                 <a onclick="addItem({nombre: '${p.nombre}', precio:${p.precio}, imagen: '${p.img}'})" href="#" class="btn btn-primary">Agregar</a>
               </div>
             </div>`;
        break;
      case "Postre":
        htmlPostres += `<div class="card">
           <img src="${p.img}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title"><strong>${p.nombre}</strong></h5>
             <p class="card-description">${p.descripción}</p>
             <p class="card-text"><strong>$ ${p.precio}</strong></p>
             <a onclick="addItem({nombre: '${p.nombre}', precio:${p.precio}, imagen: '${p.img}'})" href="#" class="btn btn-primary">Agregar</a>
           </div>
         </div>`;
        break;
      case "Bebidas":
        htmlBebidas += `<div class="card">
               <img src="${p.img}" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title"><strong>${p.nombre}</strong></h5>
                 <p class="card-description">${p.descripción}</p>
                 <p class="card-text"><strong>$ ${p.precio}</strong></p>
                 <a onclick="addItem({nombre: '${p.nombre}', precio:${p.precio}, imagen: '${p.img}'})" href="#" class="btn btn-primary">Agregar</a>
               </div>
             </div>`;
        break;
      case "Complementos":
        htmlComplementos += `<div class="card">
               <img src="${p.img}" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title"><strong>${p.nombre}</strong></h5>
                 <p class="card-description">${p.descripción}</p>
                 <p class="card-text"><strong>$ ${p.precio}</strong></p>
                 <a onclick="addItem({nombre: '${p.nombre}', precio:${p.precio}, imagen: '${p.img}'})" href="#" class="btn btn-primary">Agregar</a>
               </div>
             </div>`;
        break;
      case "Bebidas alcohólicas":
        htmlAlcohol += `<div class="card">
               <img src="${p.img}" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title"><strong>${p.nombre}</strong></h5>
                 <p class="card-description">${p.descripción}</p>
                 <p class="card-text"><strong>$ ${p.precio}</strong></p>
                 <a onclick="addItem({nombre: '${p.nombre}', precio:${p.precio}, imagen: '${p.img}'})" href="#" class="btn btn-primary">Agregar</a>
               </div>
             </div>`;
        break;
    }
            }); // foreach
            divHamburguesas.insertAdjacentHTML("afterbegin", hmtlHamburguesas);
         divPostres.insertAdjacentHTML("afterbegin", htmlPostres);
         divBebidas.insertAdjacentHTML("afterbegin", htmlBebidas);
         divComplementos.insertAdjacentHTML("afterbegin", htmlComplementos);
         divAlcohol.insertAdjacentHTML("afterbegin", htmlAlcohol);
        });//then
    }).catch(function(err) {
        console.log(err);
    });
}// addItems

window.addEventListener("load", function (){
    addItems();
   
});

/*
function addItem(jsonBurguer){
  let itemStorage = JSON.parse(localStorage.getItem("jsonCarrito"));
  if (itemStorage==null) {
    let jasonItems = [jsonBurguer];
    localStorage.setItem("jsonCarrito",JSON.stringify(jasonItems));
    Swal.fire("El producto se agrego a tu carrito");
  } else {

    let getCarrito = [];
    let itemsCarrito = localStorage.getItem("jsonCarrito");
    let carritoArray = JSON.parse(itemsCarrito);
    
    getCarrito = carritoArray;
    getCarrito.push(jsonBurguer);
    Swal.fire("El producto se agrego a tu carrito");
    localStorage.setItem("jsonCarrito", JSON.stringify(getCarrito));
  }

}

window.addEventListener("load", function (event) {
  let retSessionMenu = JSON.parse(localStorage.getItem("jsonNuevoProducto"));
  if (retSessionMenu == null ) {
    localStorage.setItem('jsonNuevoProducto', JSON.stringify(jsonMenu));
    retSessionMenu = JSON.parse(localStorage.getItem("jsonNuevoProducto"));
  }
    console.log(retSessionMenu);

  event.preventDefault();

  retSessionMenu.forEach(burguer => {
    switch (burguer.categoría) {
      case "Hamburguesas":
        hmtlHamburguesas += `<div class="card">
               <img src="${burguer.img}" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title"><strong>${burguer.nombre}</strong></h5>
                 <p class="card-description">${burguer.descripción}</p>
                 <p class="card-text"><strong>$ ${burguer.precio}</strong></p>
                 <a onclick="addItem({nombre: '${burguer.nombre}', precio:${burguer.precio}, imagen: '${burguer.img}'})" href="#" class="btn btn-primary">Agregar</a>
               </div>
             </div>`;
        break;
      case "Postre":
        htmlPostres += `<div class="card">
           <img src="${burguer.img}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title"><strong>${burguer.nombre}</strong></h5>
             <p class="card-description">${burguer.descripción}</p>
             <p class="card-text"><strong>$ ${burguer.precio}</strong></p>
             <a onclick="addItem({nombre: '${burguer.nombre}', precio:${burguer.precio}, imagen: '${burguer.img}'})" href="#" class="btn btn-primary">Agregar</a>
           </div>
         </div>`;
        break;
      case "Bebidas":
        htmlBebidas += `<div class="card">
               <img src="${burguer.img}" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title"><strong>${burguer.nombre}</strong></h5>
                 <p class="card-description">${burguer.descripción}</p>
                 <p class="card-text"><strong>$ ${burguer.precio}</strong></p>
                 <a onclick="addItem({nombre: '${burguer.nombre}', precio:${burguer.precio}, imagen: '${burguer.img}'})" href="#" class="btn btn-primary">Agregar</a>
               </div>
             </div>`;
        break;
      case "Complementos":
        htmlComplementos += `<div class="card">
               <img src="${burguer.img}" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title"><strong>${burguer.nombre}</strong></h5>
                 <p class="card-description">${burguer.descripción}</p>
                 <p class="card-text"><strong>$ ${burguer.precio}</strong></p>
                 <a onclick="addItem({nombre: '${burguer.nombre}', precio:${burguer.precio}, imagen: '${burguer.img}'})" href="#" class="btn btn-primary">Agregar</a>
               </div>
             </div>`;
        break;
      case "Bebidas alcohólicas":
        htmlAlcohol += `<div class="card">
               <img src="${burguer.img}" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title"><strong>${burguer.nombre}</strong></h5>
                 <p class="card-description">${burguer.descripción}</p>
                 <p class="card-text"><strong>$ ${burguer.precio}</strong></p>
                 <a onclick="addItem({nombre: '${burguer.nombre}', precio:${burguer.precio}, imagen: '${burguer.img}'})" href="#" class="btn btn-primary">Agregar</a>
               </div>
             </div>`;
        break;
    }
  });
  divHamburguesas.insertAdjacentHTML("afterbegin", hmtlHamburguesas);
  divPostres.insertAdjacentHTML("afterbegin", htmlPostres);
  divBebidas.insertAdjacentHTML("afterbegin", htmlBebidas);
  divComplementos.insertAdjacentHTML("afterbegin", htmlComplementos);
  divAlcohol.insertAdjacentHTML("afterbegin", htmlAlcohol);

});*/