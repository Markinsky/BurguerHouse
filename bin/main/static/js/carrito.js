let divItems=document.getElementById("divItems");
let btnClear = document.getElementById("btnClear")
let hmtlCarrito="";
var mapCarrito = new Map();

window.addEventListener("load",function(event) {
  event.preventDefault();
  divItems.innerHTML = "";
    hmtlCarrito="";
      mostrar();
    
})
 function mostrar() {
  divItems.innerHTML = "";
  let carrito = JSON.parse(localStorage.getItem("jsonCarrito"))
  if (Object.keys(carrito).length === 0) {
    divItems.innerHTML = "";
    hmtlCarrito = "Aún no has agregado nada a tu carrito";
    divItems.insertAdjacentHTML("afterbegin",hmtlCarrito)
  }else{
    let syntxCarrito = "";
    let cont = 1;
    let sumaTotal = 0;

    // Paso 1: contar objetos repetidos
let contObj = {};
carrito.forEach((obj) => {
  let key = obj.nombre + obj.precio + obj.imagen;
  if (contObj[key]) {
    contObj[key]++;
  } else {
    contObj[key] = 1;
  }
});
// Paso 2: agregar el campo "cont" a cada objeto
carrito.forEach((obj) => {
  let key = obj.nombre + obj.precio + obj.imagen;
  obj.cont = contObj[key];
});
// Paso 3: crear un nuevo array con objetos únicos
let uniqueArray = [];
let uniqueObj = {};
carrito.forEach((obj) => {
  let key = obj.nombre + obj.precio + obj.imagen;
  if (!uniqueObj[key]) {
    uniqueArray.push(obj);
    uniqueObj[key] = true;
  }
});
     uniqueArray.forEach(car =>{
     let total = car.cont *car.precio;
     sumaTotal += total;
     syntxCarrito = `<div id="card">
                        <h3 id="nombreProducto">${car.nombre}</h3>
                        <div id="completo">
                         <div id="imagencard">
                           <img src="${car.imagen}" alt="${car.nombre}">
                           </div>
                         <div class="card-content">
                         <p>Precio: $ ${car.precio}</p>
                         <p>Total: $ ${total}</p>
                         <div class="card-buttons">
                         <p>Cantidad: 
                           <i onclick="agregar('${car.nombre}', '${car.imagen}', ${car.precio})" class="fa-solid fa-plus"></i>${car.cont}
                           <i onclick="eliminar('${car.nombre}')" class="fa-solid fa-minus"></i></p>
                           </div>
                         </div>
                         </div>
                      </div>
                      `;
    mapCarrito.set(car.nombre, syntxCarrito);
    cont = 1;
    total = 0;    
    });
    divItems.insertAdjacentHTML("afterbegin",almacenamiento(sumaTotal));
  }
 }

function agregar(nombreMap, imagenMap, precioMap){
  let localCarrito = JSON.parse(localStorage.getItem("jsonCarrito"));
  let newData = {
    nombre: nombreMap,
    precio: precioMap,
    imagen: imagenMap
  }
  localCarrito.push(newData);
  localStorage.setItem("jsonCarrito", JSON.stringify(localCarrito));
  location.reload();
}

function eliminar(nombreMap){
  let localCarrito = JSON.parse(localStorage.getItem("jsonCarrito"));
  let index = localCarrito.findIndex(carr => carr.nombre === nombreMap);
  localCarrito.splice(index, 1);
  localStorage.setItem("jsonCarrito", JSON.stringify(localCarrito));
  location.reload();
}

 function almacenamiento(sumaTotal) {
  divItems.innerHTML = null;
  hmtlCarrito = "";
  mapCarrito.forEach((map,key) =>{
    hmtlCarrito += mapCarrito.get(key);
  });

  let htmlTable = `<table id="htmlTable" class="table">
  <tr>
    <th scope="col">Producto</th>
  </tr>
  ${hmtlCarrito}
  <tr>
  <td><label> <strong> Total del carrito $ ${sumaTotal}</strong></label></td>
  </tr>
  </table>`;

  return htmlTable;
 }

 btnClear.addEventListener("click" , function(){

  localStorage.setItem("jsonCarrito", "[]");
  location.reload();
 });