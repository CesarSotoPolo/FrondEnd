let texto = "Hola Mundo!"

console.log(texto);
console.log(texto.length);

console.log(texto.toUpperCase());

let frase = new String("el codigo  muy  a la derecha es malo");// no es muy recomendable usar esta forma para declarar primitivos

console.log(frase);

console.log(frase.length);

console.log(frase.toUpperCase());

console.log(frase.toLowerCase());

console.log(frase.includes("gato")); // busca si existe la palabra en la cadena

//  ------------   Objeto Math -------
//Math no tiene que ser instanciado, como una clase con metodos estaticos
console.log("Round:",Math.round(2.4)),// .5 redondea para arriba

console.log("Ceil:",Math.ceil(2.1));

console.log("Floor:",Math.floor(2.9));

console.log("Random:",Math.random());//un numero aleatorio entre 0 y 1

console.log("PI:",Math.PI);

console.log("EULER:",Math.E);

//---------- Objeto Date ---------------
let hoy = new Date();

console.log("Hoy",hoy);

let halloween = new Date("20225-10-31");

console.log(halloween);

console.log(hoy.getFullYear());

console.log(hoy.getMonth());// JS cuenta lo smeses desde 0, 0 es Enero

console.log(hoy.getDay());

console.log(hoy.getTime()); //timestamp, t milisegundos a partir de 01 Enero 70
//use nTimestamp
let timestampHoy = hoy.getTime();

let timestampHalloween = halloween.getTime();

console.log(timestampHoy)

console.log(timestampHalloween)

let tiempoHastaHalloween = timestampHalloween - timestampHoy

console.log(tiempoHastaHalloween);
