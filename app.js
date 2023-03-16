const pokemonForm = document.querySelector("#pokemon-form")
const result = document.querySelector(".result");

pokemonForm.onsubmit = async function (event) {
  event.preventDefault();
  const pokemonName = event.target[0].value;
  if(!pokemonName) {
    alert ("debes escribir el nombre del pokemon");
    return;
  }

  const reponse = await fetch (
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  //si es falso
  if (!Response.ok) {
  alert("El pokemon que buscas no existe");
  return;
}
  const pokeData = await Response.json();
  console.log(pokeData)

  result.innerHTML = `
    <img src="${pokeData.sprites.other[]}
  `
};