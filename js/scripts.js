let pokemonList = [
  {
    name: "Gloom",
    type: ["Poison"],
    hight: [2.07],
    ImgUrl: ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png"],
  },
  {
    name: "Vileplume",
    type: ["Grass"],
    hight: [3.11],
    ImgUrl: ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png"],
  },
  {
    name: "Paras",
    type: ["Bug", "Grass"],
    hight: [1],
    ImgUrl: ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png"],
  },
];

for (let i = 0; i < pokemonList.length; i++) {
  document.write(
    " " +
      pokemonList[i].name +
      " type: " +
      pokemonList[i].type +
      " :" +
      " hight:" +
      pokemonList[i].hight +
      "<br>"
  );
  document.write(`<img src = "${pokemonList[i].ImgUrl}" />`);
  if (pokemonList[i].hight > 3.0) {
    console.log(pokemonList[i].name + "" + " It is the biggest Pokemons");
    document.write("This is the biggest Pokemons <br>");
  } else if (pokemonList[i].hight > 1 && pokemonList[i].hight < 3.0) {
    console.log(pokemonList[i].name + "" + " It is the medium Pokemons");
    document.write("This Pokemon is Medium <br>");
  } else {
    console.log(pokemonList[i].name + "" + " It is the smallest Pokemons");
    document.write("This is smallest<br>");
  }
}
document.write("foreach loop  Object output: <br>");

  //another way  foreach function
    pokemonList.forEach(function(property) {
        document.write(`<img src = "${property.ImgUrl}" />`);
        document.write( property.name + " : " +'It is type of: ' + property.type + 'It is Highy:' + property.hight +'.<br>');
      });
  
