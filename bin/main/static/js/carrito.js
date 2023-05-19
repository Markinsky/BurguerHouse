let divItems=document.getElementById("divItems");
let hmtlCarrito="";
var mapCarrito = new Map();

window.addEventListener("load",function(event) {
  event.preventDefault();
  divItems.innerHTML = "";
    hmtlCarrito="";
      mostrar();
    
})
 function mostrar() {
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
     console.log("Total "+ total)
     console.log("sumaTotal "+ sumaTotal);
     syntxCarrito = `<tr>
                      <td><img src="${car.imagen}"> <label id="nombreProducto"> ${car.nombre}</label></td> 
                      <td id="cantidad"><i onclick="agregar('${car.nombre}', '${car.imagen}', ${car.precio})" class="fa-solid fa-plus "></i><label>${car.cont}</label><i onclick="eliminar('${car.nombre}', '${car.imagen}', ${car.precio})" class="fa-solid fa-minus"></i></td>
                      <td><label id="numPrecio">$ ${car.precio}</label></td>
                      <td><label id="numTotal">$ ${total}</label></td>
                      </tr>
                      `;
    mapCarrito.set(car.nombre, syntxCarrito);
    cont = 1;
    total = 0;    
    });
    divItems.innerHTML = "";
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
  mostrar();
}

function eliminar( nombreMap, imagenMap, precioMap){
  let localCarrito = JSON.parse(localStorage.getItem("jsonCarrito"));
  let dropData = {
    nombre: nombreMap,
    precio: precioMap,
    imagen: imagenMap
  }
  let index = localCarrito.indexOf(dropData);
  localCarrito.splice(index, 1);
  localStorage.setItem("jsonCarrito", JSON.stringify(localCarrito));
  mostrar();
}

 function almacenamiento(sumaTotal) {
  divItems.innerHTML = null;
  hmtlCarrito = "";
  mapCarrito.forEach((map,key) =>{
    hmtlCarrito += mapCarrito.get(key);
  });

  let htmlTable = `<table id="htmlTable" class="table">
  <tr>
    <th scope="col" id="tituloProducto">Producto</th>
    <th scope="col">Cantidad</th>
    <th scope="col">Precio</th>
    <th scope="col">Total</th>
  </tr>
  ${hmtlCarrito}
  <tr>
  <td><label>Total del carrito $ ${sumaTotal}</label></td>
  </tr>
  </table>`;

  return htmlTable;
 }
