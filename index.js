const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//a)  Las pizzas que tengan un id impar.//
function filtradorImpares(array){
  console.log("//////////////////////////////////////////////");
  const pizzasImpares = array.filter(impar => impar.id % 2 != 0);
  console.log("Las pizzas con id impar son:")
  pizzasImpares.forEach(pizza => {
    console.log(pizza.nombre)
  })
  console.log("//////////////////////////////////////////////");
}
// b) Responder: ¿Hay alguna pizza que valga menos de $600? //
function filtradorMenoresDeSiesMil(array){
  console.log("//////////////////////////////////////////////");
  const precioMenorASeisMil = array.filter(menor => menor.precio < 600);
  if (precioMenorASeisMil.length === 0){
    console.log("No hay pizzas con un valor menor a 600 ");
  }else if(precioMenorASeisMil.length === 1){
    console.log(`La ${precioMenorASeisMil[0].nombre} vale menos de 600`);
  }else{
    console.log("Las pizzas que valen menos de 600 son:");
    precioMenorASeisMil.forEach(pizza =>{
      console.log(pizza.nombre);
    })
  }
  console.log("//////////////////////////////////////////////");
}
//c) El nombre de cada pizza con su respectivo precio.//
function imprimidorNombrePrecio(array){
  console.log("//////////////////////////////////////////////");
  array.forEach(pizza =>{
    console.log(`La ${pizza.nombre} vale ${pizza.precio} pesos`);
  })
  console.log("//////////////////////////////////////////////");
}
//d) Todos los ingredientes de cada pizza//
function ingredietesDeCadaPizza(array){
  console.log("//////////////////////////////////////////////");
  array.forEach(pizza =>{
    console.log(`La ${pizza.nombre} cuenta con los siguientes ingredientes:`)
    pizza.ingredientes.forEach(ingrediente =>{
      console.log(ingrediente);
    })
    console.log("-----------------");
  })
  console.log("//////////////////////////////////////////////");
}


//filtradorImpares(pizzas);//

//filtradorMenoresDeSiesMil(pizzas);//

//imprimidorNombrePrecio(pizzas);//

//ingredietesDeCadaPizza(pizzas);//
