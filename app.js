/*
 Player ( un simplu div ), 
 iar daca apasam arrow down, sa il miscam in jos
 */


const player1 = new Player();

//(obligatoriu) Definiti un container de dimensiuni fixe 
//( de exemplu height: 400, width: 400)
gameContainer = document.createElement('div');
console.log(gameContainer);
this.gameContainer.style.width = "400px";
this.gameContainer.style.height = "400px";
this.gameContainer.style.backgroundColor = "blue";
document.body.appendChild(gameContainer);
