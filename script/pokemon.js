import { pokemon_URL } from "../contants/api.js";
import { fetchFromURL } from "./orai_anyag.js";

const button = '#button';
const input = '#input';
const img = '#img';

export function main(){
    document.addEventListener('DOMContentLoaded', () => {
        const buttonElement = document.querySelector(button);
        const inputElemnt = document.querySelector(input);
        const imgElement = document.querySelector(img);

        buttonElement.addEventListener('click', async () => {
            const value = inputElemnt.value;
            const newURL = pokemon_URL + value;
            const pokemonData = await fetchFromURL(newURL);
            console.log(pokemonData)
            
        })
    })
}