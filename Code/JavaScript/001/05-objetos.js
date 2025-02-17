let personaje = {

    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16,  

};

console.log(personaje);
console.log(personaje.anime);  
console.log(personaje["edad"]);

personaje.edad = 13; 

let llave = "anime";

personaje[llave] = "pokemon";

delete personaje.nombre;

console.log(personaje);