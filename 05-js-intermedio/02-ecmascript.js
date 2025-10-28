var age = 20;

//!Puede ser redeclarada!!!
var age = 30;

for(var i = 0; i < 4; i++){
  console.log(i);
}
//!No respeta bloques de código correctamente, no se deberia poder usar aqui el i
console.log("afuera del for: ", i);

console.log(age);
//NO USAR VAR BAJO NINGÚN CONCEPTO, usar let ó const

//const no permite cambiar de valor directamente
const IGV = 1.18;

// IGV = 1.15;
const frutas = ["Kiwi", "Naranja", "Mango"];

//no permite reasignar un valor directamente
// frutas = ["Piña", "Manzana", "Chirimoya"];

//Pero si hay un método que ya tengo el objeto que permita modificarlo es válido, si funcionará
frutas.push("Aguaymanto");

console.log(frutas);

///////// parametros por defecto
// si no se pasa los parametros utiliza 7 y 9 por defecto
const suma = (a = 7,b = 9) => a + b;

console.log(suma(100,500));
// aca no esta pasando parametros esta tomando los valores por defecto 
// a=7, b=9
console.log(suma());

// desestructuracion en arrays
// A comparacion de los objetos aqui usamos el indicepara acceder
const tecnologias = ["React", "Angular", "Astro"]

console.log(tecnologias[0]);
console.log(tecnologias[1])

const[tech1, tech2, tech3] = tecnologias;
console.log(tech1);
console.log(tech2);
console.log(tech3);

//spread operator
//copiando arrays
const platillos = ["Ceviche", "Pollo", "Hamburguesa"];

const postres = ["Leche asada", "Torta"];

const comida = [...platillos, "Chifa", ...postres];

console.log(comida);