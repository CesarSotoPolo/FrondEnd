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
    dormir(){
        console.log("zzzz")
    }
}

console.log(perro);

console.table(perro2);

console.log(perro.nombre);


//usando metodos
perro.ladrar();

perro2.dormir();