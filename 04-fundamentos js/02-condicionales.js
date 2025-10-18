// que diferencia hay entre una expresion vs una sentencia
//console.log(10>50);
//sirve para evaluar una expresion, si esa expresion es verdadera o falsa
if(10>50){
// si es verdadero
console.log("es verdadero")
}else{
    console.log("es falso")
}

let edad=prompt("Cual es tu edad");
// console.log(edad);
// console.log(typeof edad);
let numberEdad=Number(edad);
//let numberEdad=+(edad)
//console.log(numberEdad);
//console.log(typeof numberEdad);

if(numberEdad>30){
    console.log("estoy seguro que te duele algo");
}else{
    console.log("que suerte :D");
}

let nota=Number(prompt("Ingrese la nota numerica"));

if(nota>=18){
    console.log("A+")
}else if(nota>=16){
    console.log("A")
}else if(nota>=13){
    console.log("B")
}else{49
    console.log("C")
}

let rol=prompt("Ingrese el tipo de usuario admin, supervisor,user")

// Operador O or  al menos un valor tiene que ser true
if(rol=="admin" || rol=="supervisor"){
    console.log("puede acceder a reportes")
}else if(rol=="usuario"){
    console.log("Puede acceder a sus propios datos")
}else{
    console.log("Rol incorrecto, verificar por favor")
}

//IMPORTANTE
let creditos=prompt("De cuantos creditos dispones");

console.log(creditos)

// el == va a evaluar SOLO el valor
// el === va a evaluar el valot Y el tipo de dato
if(creditos === 100){
    console.log("tienes el numero de creditos correcto")
}else{
    console.log("No tienes el numero de creditos")
}

// falsy, recordemos que ! niega
//if (!undefined){
//if (!0){    
//if (!""){
//if (!null){
if(!("patatas"/100)){
console.log("patatas"/100);  // NaN Not a Number 
console.log("Es falso/falsy");
}

// Operadores ternarios
//expresion a evaluar ? return si es true : return si es false
let esTruthy = 10 < 200 ? "es verdaderoooo" : "es falsoooo";
console.log(esTruthy);
