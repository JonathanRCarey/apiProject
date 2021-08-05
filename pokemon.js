let bulbasaurInfo = document.querySelector('ul');

fetch('https://pokeapi.co/api/v2/pokemon/1')
.then(function(response) {
return response.json();

})
.then(function(json){
console.log(json.moves)
let moves = json.moves;

for(p of moves){
    let listItem = document.createElement('li');
    listItem.innerHTML = p.move.name;
    bulbasaurInfo.appendChild(listItem);
}})






