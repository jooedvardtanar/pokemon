export function init(){
    console.log("Meghívtam az init-et()")
}

// aszinkron
export function examplePromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Betartottam az ígéretemet!')
        }, 2000)
    })
}

// fetch()

export async function fetchFromURL(URL = 'json/hu.json'){
    const response = await fetch(URL);
    const fileData = await response.json();
    return fileData;
}