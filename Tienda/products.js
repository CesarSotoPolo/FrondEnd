// vamos a hacer una peticion para traer los productos de mockapi

const URI="https://68afa145b91dfcdd62bcb6b1.mockapi.io/prod_vanilla";
const obtenerProductos = async () => {
    const respuesta = fetch(URI);
    console.log(respuesta);
    const productosData = (await respuesta).json();
    console.log({ productosData });
    return productosData; //resolve
}

export{
    obtenerProductos
    // Uso LLaves para exportar porque asumo que en un futuro podria tener otras funciones aqui
}