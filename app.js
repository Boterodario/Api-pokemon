const d = document;
// $main = d.querySelector("main"),
// $links = d.querySelector(".links");
// formulario = d.querySelector("#formulario");
// typeColor = d.querySelector("typeColor");
card = document.getElementById("card");
btn = document.getElementById("btn");

const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};
const url = "https://pokeapi.co/api/v2/pokemon/";

let getPokeData = () => {
    // Generate a random number between 1 and 150
    let id = Math.floor(Math.random() * 25 +1) ;
    // Combine the pokeapi url with pokemon id
    const finalUrl = url + id;
    // Fetch generated URL
    fetch(finalUrl)
      .then((response) => response.json())
      .then((data) => {
        generateCard(data);
      });
  };

let generateCard = (data) => {
  // Get necessary data and assign it to variables
  console.log(data);
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.home.front_shiny;
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  const themeColor = typeColor[data.types[0].type.name];
  console.log(themeColor);
  card.innerHTML = `
        <p class="hp">
          <span>HP</span>
            ${hp}
        </p>
        <img src=${imgSrc} / class = "imgs">
        <h2 class="poke-name">${pokeName}</h2>
        <div class="types">
         
        </div>
        <div class="stats">
          <div>
            <h3>${statAttack}</h3>
            <p>Attack</p>
          </div>
          <div>
            <h3>${statDefense}</h3>
            <p>Defense</p>
          </div>
          <div>
            <h3>${statSpeed}</h3>
            <p>Speed</p>
          </div>
        </div>
  `;

  appendTypes(data.types);
  styleCard(themeColor);
};
let appendTypes = (types) => {
  types.forEach((item) => {
    let span = document.createElement("SPAN");
    span.textContent = item.type.name;
    document.querySelector(".types").appendChild(span);
  });
};
let styleCard = (color) => {
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
  card.querySelectorAll(".types span").forEach((typeColor) => {
    typeColor.style.backgroundColor = color;
  });
};
btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);

///evento buscador
const searchPokemon = event => {
event.preventDefault();
const {value} = event.target.pokemon;
fetch(`https://pokeapi.co/api/v2/pokemon/${value,toLowerCase()}`)
.then(data => data.json())
.then(response => renderPokemonData(response))
}

const renderPokemonData = data => {
const sprite = data.sprites.other.home.front_shiny;
const {stats, types} = data;
   console.log(data)

   pokeName.texContent = data.name;
   pokeID.texContent = `Nº ${data.id}`;

}

//  let pokeAPI = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50";

// async function loadPokemon(url){
// try{
// // main.innerHTML = `<img src="" alt=Cargando...`
// let res = await fetch(url),
// json = await res.json(),
// $template = "",
// $prevLink,
// $netxLink;
//  console.log(json);
//  if(!res.ok) throw {status:res.status,statusText:res.statusText}

//  for(let i = 0; i < json.results.length; i++){
//  console.log(json.results[i]);

//  try{

// let res = await fetch(json.results[i].url),
// pokemon = await res.json();

//  console.log(res,pokemon);

// if(!res.ok) throw {status:res.status,statusText:res.statusText}

//  $template += `
//  <div id = "wrapper">

// <figure class="content">
// <img src = "${pokemon.sprites.other.home.front_shiny}" alt = "${pokemon.name}" id="imagen">
// <figcaption class= "text"> ${pokemon.name}</figcaption>
// </figure>
// </div>

// `;
// }catch(err){
// // console.log(err);
// let message = err.statusText || "Ocurrio un error";
// $template += `
// <figure>

//   /* <figcaption> Error ${err.status}: $}{message} </figcaption> */
// }
// {
//   /* </figure> */
// }
// `;
// }
//  }
//    $main.innerHTML = $template;
//   $prevLink = json.previous ? `<a href= "${json.previous}">⏪</a>`:"";
//   $nextLink = json.next ? `<a href= "${json.next}">⏭️</a>`:"";
//   $links.innerHTML = $prevLink+ " " +$nextLink;
// } catch(err){
// // console.log(err);
// let message = err.statusText || "Ocurrio un error";
// $main.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
// }
// }

// d.addEventListener("DOMContentLoaded", (e) => loadPokemon(pokeAPI));

// d.addEventListener("click", (e) => {
//   if (e.target.matches(".links a")) {
    // e.preventDefault();
    // loadPokemon(e.target.getAttribute("href"));
//   }
// });
