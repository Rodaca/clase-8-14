"use strict";
/* objet array */
let goleadores = ["jisas", "amed", "yedher"];
let goles = [0, 2, 4];
let tirosEsquina = [];
console.log(`goleadores: ${goleadores}`);
console.log(`goles: ${goles}`);
let wereThererPenealties = [false];
console.log(`There were penalties: ${wereThererPenealties}`);
/* typescript infiere los mettodos aplicables segun su tipo  */
console.log(goles.map(ele => ele.toString()));
/* objects */
let goleadoresId = [10, 7, 9, 11];
goleadoresId.push(1);
goleadoresId.push(+'2');
console.log(typeof goleadoresId);
