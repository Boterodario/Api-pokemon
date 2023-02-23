const d = document
$main = d.querySelector("main"),
$links = d.querySelector(".links");

let pokeAPI = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25";

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

            <figure>
            <img src = "${pokemon.sprites.other.dream_world.front_default}" alt = "${pokemon.name}" id="imagen">
            <figcaption> ${pokemon.name}</figcaption>
            </figure>



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
