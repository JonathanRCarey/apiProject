let bulbasaurInfo = document.querySelector('ul');

fetch('https://pokeapi.co/api/v2/pokemon/1')
.then(function(response) {
return response.json();

})
.then(function(json){
console.log(json)
let pokemon = json.results;

for(p in pokemon){
    let listItem = document.createElement('li');
    listItem.innerHTML = '<p>' + p.name + '</p>';
    bulbasaurInfo.appendChild(listItem);
}

});



