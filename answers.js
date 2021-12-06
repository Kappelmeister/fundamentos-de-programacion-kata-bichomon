//1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

document.querySelector("#gen-1").innerHTML = "Generasión 1 Pokimon"


//2. Cambia el color de fondo de la primera generación de Pokimon.

document.getElementById("gen-1").style.backgroundColor = 'red';
// document.querySelectorAll("div")[2].style.backgroundColor = 'red'

document.querySelector(".infocard-list").style.backgroundColor = 'red';

// 3. Imprime por consola la URL de la página.

console.log("Esto es window.loc: "+window.location) // alternativa
console.log("Esto es doc.URL: "+document.URL);
// document.querySelector(".grid-container a").href;
// console.log("Esta es el Dominio: " + urlPg);

// 4. Imprime por consola el dominio de la página.

console.log("Esto es window.loc: "+window.location.host) // alternativa
console.log("Esto es doc.domain: "+document.domain);

//5. Imprime todos los nodos de imagen.
var nodes = document.querySelectorAll("img");
console.log(nodes);
console.log("Hay "+nodes.length+" nodos de imagen");


// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

var substitute = document.querySelectorAll("img");
for (i = 0; i < substitute.length; i++) {
    substitute[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}


// Premium. Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying







