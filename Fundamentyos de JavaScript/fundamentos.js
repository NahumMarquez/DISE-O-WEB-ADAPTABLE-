
//EJERCICIO 1
let contador =0;
contador = contador + 1;
contador = contador + 1;
console.log(contador);

const contadorr = 4;
console.log(contadorr);



//EJERCICIO 2
const contadorrr = 1;
console.log(contadorrr);
if(true){
  const contadorrr = 5;
  console.log(contadorrr);
}





//EJERCICIO 3
const persona={
  nombre: "Gustavo",
  Apellido: "Marquez"
}
persona.nombre ="Nahum";
console.log(persona.nombre)



//EJERCICIO 4
//Objetos literales y Optional chainig operador
const frutas= ["pera","manzana", "sandia"];
console.log(frutas [2]);



//EJERCICIO 5
//Objetos literales, no indexados
const animal={
  color:"naranja",
  nombre:"simba",
  rugiendo: true
}
console.log("Este leon es de color "+ animal.color);
console.log("Su nombre es: " + animal.nombre);
console.log(animal ["rugiendo"]);




//EJERCICIO 6
//Arreglo de tareas
const tareas={
  "2359-91kewgnjwlmlmq":{
    title: "tareas #01"
  }
}
console.log(tareas ["2359-91kewgnjwlmlmq"].title);





//EJERCICIO 7
//Objetos literales, no indexados
const animales = {
  color:"naranja",
  nombre:"simba",
  rugiendo: true,
  favoritos:{
    dia: {
      ok:true,
    },
    noche:{
      ok: false
    }
  }
}
console.log(animales.favoritos.dia.ok);






//EJERCICIO 8
//Destructuring
const animaless = {
  colors:"naranja",
  nombree:"Simba",
  rugiendoo: true,
  favorito:{
    dias: {
      oki:true,
    },
    noches:{
      oki: false
    }
  }
}
//guardar el valor de la propiedad color en una constante
const colors = animaless.colors;
const nombree = animaless.nombree;
console.log("color: " + colors + ", animal: " + nombree);





// EJERCICIO 9
const animals = {
  colores: "azul",
  suNombre: "Torogoz",
  volando:true
  
}
//desgtructuring...
const {colores ,suNombre, volando}= animals;
console.log("El " + suNombre + " es de color: " + colores);





//EJERCICIO 10
//arrays indexados
const frutass= ["fresa", "uva", "piña"];
//destructuring array
const [fresa, uva, piña] =frutass;
console.log( "Al torogoz le gusta " + uva);
