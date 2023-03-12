fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const pokeContainer = document.getElementById("poke-container");
    const pokemon = data.results;
    pokemon.forEach((poke, index) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${index+1}`)
        .then((response) => response.json())
        .then((data) => {
          const pokeCard = document.createElement("div");
          pokeCard.classList.add("poke-card");
          const pokeImg = document.createElement("img");
          pokeImg.classList.add("img")
          pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${index + 1}.png`;
          pokeImg.alt = poke.name;
          const pokeNumber = document.createElement("span");
          pokeNumber.textContent = `#${index + 1}`;
          const pokeName = document.createElement("h2");
          pokeName.textContent = poke.name;
          
          // Crear el contenedor para pokeNumber y pokeName
          const pokeDetails = document.createElement("div");
          pokeDetails.classList.add("poke-details");
          
          // Agregar pokeNumber y pokeName a pokeDetails
          pokeDetails.appendChild(pokeNumber);
          pokeDetails.appendChild(pokeName);
          
          // Crear los stacks y agregarlos a pokeDetails
          const stack1 = document.createElement("div");
          stack1.classList.add("stack");

          
        
         
          const statAttack = document.createElement("span");
          statAttack.textContent = `Attack  ${data.stats[1].base_stat.toString()}`;
          stack1.appendChild(statAttack);

          const statDefense = document.createElement("span");
          statDefense.textContent = `Defense ${data.stats[2].base_stat.toString()}`;
          stack1.appendChild(statDefense);

          const Speed = document.createElement("span");
          Speed.textContent = `Speed ${data.stats[2].base_stat.toString()}`;
          stack1.appendChild(Speed);
          

          
          


                  
          // const weightLabel = document.createElement("span");
          // weightLabel.textContent = "Weight:";

          // const weightValue = document.createElement("span");
          // weightValue.textContent = `${data.weight / 10} kg`;
          // stack1.appendChild(weightLabel);
          // stack1.appendChild(weightValue);
          // pokeDetails.appendChild(stack1);
          
          // const stack2 = document.createElement("div");
          // stack2.classList.add("stack");

          // const heightLabel = document.createElement("span");
          // heightLabel.textContent = "Height:";

          // const heightValue = document.createElement("span");
          // heightValue.textContent = `${data.height / 10} m`;
          // stack2.appendChild(heightLabel);
          // stack2.appendChild(heightValue);
          // pokeDetails.appendChild(stack2);
          
          pokeCard.appendChild(pokeImg);
          pokeCard.appendChild(pokeDetails);
          pokeContainer.appendChild(pokeCard);
          pokeDetails.appendChild(stack1);
        });
    });
  });








