// hay q ejecuta   npm init -y   luego    npm i axios

//todo lo que hayamos instalado ira a 
import axios from "axios";


const getData = async () => {
    try{
      const response = await axios.get("https://68afa145b91dfcdd62bcb6b1.mockapi.io/prod_vanilla");
      console.log(response);
    }catch(error){
        console.log(error);
    }
}

getData();

// console.log("hola mindo desde node.js!!!")





