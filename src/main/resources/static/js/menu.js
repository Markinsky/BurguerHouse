let jsonMenu = [
  {
    nombre: "Burger BBQ",
    img: "/src/imgmenu/burgerBbq.jpeg",
    descripción: "Exquisita Hamburguesa de res, tocino, queso gouda.",
    precio: 226,
    categoría: "Hamburguesas",
  },
  {
    nombre: "Burger Doble con queso",
    img: "/src/imgmenu/burgerDobleconqueso.jpeg",
    descripción: "Exquisita Hamburguesa de res, queso blue cheese.",
    precio: 156,
    categoría: "Hamburguesas",
  },
  {
    nombre: "Burger choriqueso",
    img: "/src/imgmenu/burgerChoriqueso.jpeg",
    descripción:
      "Exquisita Hamburguesa de res con chorizo, queso mozzarella gratinado, y salsa de chistorra.",
    precio: 166,
    categoría: "Hamburguesas",
  },
  {
    nombre: "Burger Mexicana",
    img: "/src/imgmenu/burgerMexicana.jpg",
    descripción:
      "Exquisita Hamburguesa de res, guacamole, tortillas crujientes, queso gouda y pico de gallo.",
    precio: 173,
    categoría: "Hamburguesas",
  },
  {
    nombre: "Burger de pollo",
    img: "/src/imgmenu/burgerdepollo.jpeg",
    descripción:
      "Exquisita Hamburguesa de pollo, queso philadelphia, aguacate, germen de alfalfa.",
    precio: 123,
    categoría: "Hamburguesas",
  },
  {
    nombre: "Burger blue cheese",
    img: "/src/imgmenu/burgerbluecheese.jpeg",
    descripción:
      "Exquisita Hamburguesa de res, queso blue cheese, tocino, y cebolla al chipotle.",
    precio: 134,
    categoría: "Hamburguesas",
  },
  {
    nombre: "Brownie con nieve",
    img: "/src/imgmenu/brownie.jpg",
    descripción:
      "delicioso postre de chocolate coronado con una sabrosa bola de nieve de vainilla",
    precio: 50,
    categoría: "Postre",
  },
  {
    nombre: "Jericallas",
    img: "/src/imgmenu/jericalla.jpg",
    descripción:
      "Rico postre tapatío que hace una mezcla de dos culturas tanto europeas como mexicanas.",
    precio: 45,
    categoría: "Postre",
  },
  {
    nombre: "Limonada Mineral",
    img: "/src/imgmenu/bebidasLimonadaMineral.jpg",
    descripción:
      "Nuestra limonada mineral se elabora con jugo de limones frescos, agua mineral y azúcar.",
    precio: 50,
    categoría: "Bebidas",
  },
  {
    nombre: "Agua Mineral",
    img: "/src/imgmenu/bebidasAguaMineral.jpg",
    descripción:
      "Nuestro agua mineral se sirve fría en botellas de vidrio para mantener su frescura y sabor natural.",
    precio: 30,
    categoría: "Bebidas",
  },
  {
    nombre: "Refrescos del día",
    img: "/src/imgmenu/bebidasRefresco.jpg",
    descripción:
      "Refrescos servidos con hielo en nuestros finos vasos de 355 ml.",
    precio: 25,
    categoría: "Bebidas",
  },
  {
    nombre: "Papas a la francesa",
    img: "/src/imgmenu/papasFrancesa.jpg",
    descripción:
      "Papas con corte clásico a la francesa con sal rosada del himalaya, muy crujientes.",
    precio: 80,
    categoría: "Complementos",
  },
  {
    nombre: "Papas gajo",
    img: "/src/imgmenu/papasGajo.jpg",
    descripción:
      "Papas en corte en gajo sazonada con sal rosada del himalaya y pimienta.",
    precio: 90,
    categoría: "Complementos",
  },
  {
    nombre: "Aros de Cebolla",
    img: "/src/imgmenu/arosCebolla.jpg",
    descripción:
      "Crujientes y doraditos aros de cebolla (200 g) acompañado de jícamas a la francesa y chilito en polvo",
    precio: 90,
    categoría: "Complementos",
  },
  {
    nombre: "Elotitos preparados",
    img: "/src/imgmenu/elotePreparado.jpg",
    descripción:
      "2 medios elotitos amarillos asados a la parrilla y aderezados con ranch, queso panela y chilito.",
    precio: 95,
    categoría: "Complementos",
  },
  {
    nombre: "Pa probar",
    img: "/src/imgmenu/paCompartir.JPG",
    descripción:
      "Deliciosas alitas bañadas en salsa buffalo, con papas a la francesa, conjunto de aros de cebolla y 4 dedos de queso.",
    precio: 290,
    categoría: "Complementos",
  },
  {
    nombre: "Alitas de pollo teriyaki",
    img: "/src/imgmenu/alitasPolloTeriyaki.jpg",
    descripción:
      "Las alitas de pollo teriyaki se preparan sofriendo la carne previamente marinada con salsa dulce a base de miel, jengibre.",
    precio: 160,
    categoría: "Complementos",
  },
  {
    nombre: "Dedos de queso",
    img: "/src/imgmenu/dedosDeQueso.jpg",
    descripción:
      "Dedos de queso mozzarella fritos y acompañados con un dip de tomate a las finas hierbas",
    precio: 75,
    categoría: "Complementos",
  },
  {
    nombre: "Cerveza XX lager",
    img: "/src/imgmenu/cervezaX.jpg",
    descripción: "Con aroma suave y fresco con notas de malta, Envase de 355 ml",
    precio: 47,
    categoría: "Bebidas alcohólicas",
  },
  {
    nombre: "Cerveza artesanal tempus dorada",
    img: "/src/imgmenu/cervezaArtesanal.jpg",
    descripción: "Cerveza ligera, con notas intensas a miel de 355 ml.",
    precio: 98,
    categoría: "Bebidas alcohólicas",
  },
  {
    nombre: "Mojito Azul",
    img: "/src/imgmenu/mojitoAzul.jpg",
    descripción:
      "Gin Boodles Dry, Limón amarillo, Hierba buena, Tónica, Curazao",
    precio: 120,
    categoría: "Bebidas alcohólicas",
  },
  {
    nombre: "Mango tropical",
    img: "/src/imgmenu/mangoTropical.jpg",
    descripción: "Mezcal 400 conejos 50 ml Mango, piña y chamoy",
    precio: 143,
    categoría: "Bebidas alcohólicas",
  },
  {
    nombre: "Paloma La Bonita",
    img: "/src/imgmenu/palomaTequila.jpg",
    descripción:
      "Tequila Tradicional silver 44 ml, Toronja, Romero, Ginger Ale",
    precio: 137,
    categoría: "Bebidas alcohólicas",
  },
  {
    nombre: "Pastel de chocolate",
    img: "/src/imgmenu/pasteldechocolate.jpg",
    descripción:
      "Delicioso pastel de chocolate con tres capas de bizcocho de chocolate y crema de chocolate.",
    precio: 98,
    categoría: "Postre",
  },
];

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

});