const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");


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


let offset = 1;
let limit = 8;


previous.addEventListener("click", () => {
  if(offset !=1){
    offset -= 9;
    fetchPokemons(offset, limit);
  }
  
  
})

next.addEventListener("click", () =>{
  offset += 9;
  fetchPokemons(offset, limit);
})


function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((response) => response.json())
    .then((data) => {
      createPokemon(data);
      spinner.style.display = "none";
    });
}


function fetchPokemons(offset, limit) {
  spinner.style.display = "block";
  for (let i = offset; i <= offset + limit; i++) {
    fetchPokemon(i);
  }
}

function createPokemon(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.classList.add("poke");
  sprite.src = pokemon.sprites.other.home.front_shiny;

  spriteContainer.appendChild(sprite);

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  const hp = document.createElement("h3");
  hp.classList.add("health");
  hp.textContent = `HP ${pokemon.stats[0].base_stat.toString()}`;


  
  const statAttack = document.createElement("h3");
  statAttack.classList.add("attack");
  statAttack.textContent = `Attack  ${pokemon.stats[1].base_stat.toString()}`;

  const statDefense = document.createElement("h3");
  statDefense.classList.add("defense");
  statDefense.textContent = `Defense ${pokemon.stats[2].base_stat.toString()}`;

  const Speed = document.createElement("h3")
  Speed.textContent = `Speed ${pokemon.stats[2].base_stat.toString()}`;

  //  const themeColor= document.createElement("h3")
  //  themeColor.classList.add("Color")
  //  themeColor.textContent = typeColor.pokemon.types[0].type.name;



    // console.log(themeColor);
  //  pokemonContainer.innerHTML = `
          // <p class="hp">
            //  <span>HP</span>
              //  ${hp}
      // </p>
      // <img src=${spriteContainer} / >
      // <h2 class="poke-name">${name}</h2>
      // <div class="types">
   
      // </div>
      // <div class="stats">
    //  <div>
        // <h3>${statAttack}</h3>
      // <p>Attack</p>
      // </div>
      // <div>
      // <h3>${statDefense}</h3>
      // <p>Defense</p>
    //  </div>
      // <div>
      // <h3>${Speed}</h3>
        // <p>Speed</p>
        //  </div>
      // </div>
          // </div>
    // `;
//  appendTypes(pokemon.types);
//  styleCard(themeColor);
  // };
//  let appendTypes = (types) => {
  // types.forEach((item) => {
  // let span = document.createElement("SPAN");
  // span.textContent = item.type.name;
  // document.querySelector(".types").appendChild(span);
//  });
  // ;
  // let styleCard = (color) => {
//  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffff`
//  card.querySelectorAll(".types span").forEach((typeColor) => {
//  typeColor.style.backgroundColor = color;
//  });
//  };
//  btn.addEventListener("click", getPokeData);
//  window.addEventListener("load", fetchPokemon);

  card.appendChild(spriteContainer);
  card.appendChild(name);
  card.appendChild(hp);
  card.appendChild(statAttack);
  card.appendChild(statDefense);
  card.appendChild(Speed);
  // card.appendChild(themeColor);

  pokemonContainer.appendChild(card);
}

fetchPokemons(offset, 81);
