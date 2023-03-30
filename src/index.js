const express = require('express');
const axios = require('axios');
const ejs = require('ejs');

const app = express();

app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));
app.set('view engine', 'ejs');

// Définition de la route pour afficher les 20 premiers Pokémon
app.get('/', (req, res) => {
  // Appel à l'API Pokemon pour récupérer les 20 premiers Pokémon
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then(response => {
      // Récupération des données des 20 premiers Pokémon
      const pokemonData = response.data.results;
      const pokemonArray = [];

      // Boucle pour récupérer les informations complètes de chaque Pokémon
      pokemonData.forEach(pokemon => {
        axios.get(pokemon.url)
          .then(response => {
            pokemonArray.push(response.data);

            // Si on a récupéré toutes les informations des 20 premiers Pokémon, on renvoie la vue index.ejs
            if (pokemonArray.length === 20) {
              res.render('index', { pokemons: pokemonArray });
            }
          })
          .catch(error => {
            console.log(error);
          });
      });
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(3000, () => {
  console.log('Le serveur a démarré sur le port 3000');
});
module.exports = app;
