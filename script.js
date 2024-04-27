import { fetchDataFromURL, init, readInTranslation } from "./script/orai.js";

const pokemon = 'https://pokeapi.co/api/v2/pokemon/';
const IMINEK = 'https://pokeapi.co/api/v2/pokemon/ditto';

init();
readInTranslation();
readInTranslation('en');
const pokemonData = await fetchDataFromURL(pokemon);
console.log(pokemonData)

// Input + Gomb pl.: ditto
// fénykép az oldalra