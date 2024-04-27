export function init(){
    document.addEventListener('DOMContentLoaded', () => {
        console.log("loaded")
    })
}

export function examplePromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Ténylegesen kifizettem a pénzt")
        }, 2000)
    })
}

export async function readInTranslation(lang = 'hu'){
    // fetch("json/hu.json").then((response) => {
    //     response.json().then((data) => {
    //         console.log(data)
    //     })
    // })

    const response = await fetch(`json/${lang}.json`);
    const data = await response.json();
}

export async function fetchDataFromURL(URL){
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}
