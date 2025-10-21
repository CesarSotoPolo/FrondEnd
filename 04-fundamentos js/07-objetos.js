let perro = {
    nombre: "Luky",
    edad: 3,
    color: "Blanco/Negro/Caramelo",
    amigable:true,
    //metodo
    
    ladrar:function(){
        //console.log("Si es otro perrito WUA WUA WUA")
        //this hace referencia al propio obheto donde esta presente
        console.log(`${this.nombre} ladra si es otro perrito WUA WUA WUA`)
    }
        
    // ladrar: () => {        
    //     //la funcion fecla hace referencia a window, window es el navegado
    //     //aqui el this pertenece a window
    //     //No utilizar funciones fecla dentro de objetos
    //     console.log(`${this.nombre} ladra si es otro perrito WUA WUA WUA`)      
    //     }
    }


let perro2 = {
    nombre: "Yuyo",
    edad: 18,
    color: "Blanco/Negro",
    amigable:true,
    "vacunado-2025":true,
    "tiene-chip":"Si tiene, 1234567",
    dormir(){
        console.log("zzzz")
    }
}

console.log(perro);

console.table(perro2);

//comno acceder a propiedades
console.log("Nombre:",perro.nombre); // sintaxis de punto

let nombrePropiedad = "amigable";

console.log("Amigable:", perro2[nombrePropiedad]); //sintaxis de corchete
console.log("Vacunado:", perro2["vacunado-2025"]); 


//Desestructuracion, aplicamos para no repetir perro. perro.
//pero necesitamos saber los nombres de las propiedades
let {  edad, color, nombre} = perro;
console.log(edad);
console.log(color);
console.log(nombre);

let {  edad:edad2, color:color2, nombre:name2} = perro2;
console.log(edad2);
console.log(color2);
console.log(name2);



//usando metodos
perro.ladrar();

perro2.dormir();


//Aplicar desestructuracion en los parametros, hay que poner en llave los parametros {nombre, edad, color, amigable}
//let registrarMascota=(nombre, edad, color, amigable) =>{
let registrarMascota=({nombre, edad, color, amigable,peso}) =>{
    console.log(`La mascota ${nombre} de ${edad} años y color ${color} es ${amigable} de ${peso}Kg`);
}

let nuevaMascota={
    nombre:"Luky",
    edad:3,
    peso:18,
    color:"Beagle",
    amigable:"true"
}

//registrarMascota("Miky",15,"Negro/Balnco",true);
registrarMascota(nuevaMascota);
