const d = document
$main = d.querySelector("main"),
$links = d.querySelector(".links");
formulario = d.querySelector("#formulario");
// button = d.querySelector("#button");
pokeID = d.querySelector("pokeId")
pokeName = d.querySelector("pokeName")




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






let pokeAPI = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50";








async function loadPokemon(url){
    try{
        // main.innerHTML = `<img src="" alt=Cargando...`
        let res = await fetch(url),
        json = await res.json(),
        $template = "",
        $prevLink,
        $netxLink;
         console.log(json);


     if(!res.ok) throw {status:res.status,statusText:res.statusText}

     for(let i = 0; i < json.results.length; i++){
        // console.log(json.results[i]);

        try{

            let res = await fetch(json.results[i].url),
            pokemon = await res.json();

            // console.log(res,pokemon);

            if(!res.ok) throw {status:res.status,statusText:res.statusText}

            $template += `
            <div id = "wrapper">
            
            <figure class="content">
            <img src = "${pokemon.sprites.other.home.front_shiny}" alt = "${pokemon.name}" id="imagen">
            <figcaption class= "text"> ${pokemon.name}</figcaption>
            </figure>
            

        
            </div>



            `;
        }catch(err){
            // console.log(err);
            let message = err.statusText || "Ocurrio un error";  
            $template += `
            <figure>
            <figcaption> Error ${err.status}: $}{message} </figcaption>
            </figure>
            `;
        }
     }


       $main.innerHTML = $template;
      $prevLink = json.previous ? `<a href= "${json.previous}">⏪</a>`:"";
      $nextLink = json.next ? `<a href= "${json.next}">⏭️</a>`:"";
      $links.innerHTML = $prevLink+ " " +$nextLink;
    } catch(err){
        // console.log(err);
        let message = err.statusText || "Ocurrio un error";
        $main.innerHTML = `<p>Error ${err.status}: ${message}</p>`;

    }
}


d.addEventListener("DOMContentLoaded", e => loadPokemon(pokeAPI));

d.addEventListener("click",e=>{
if(e.target.matches(".links a")){
    e.preventDefault();
    loadPokemon(e.target.getAttribute("href"));
}
});
