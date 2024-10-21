/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function firstLettersArray(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i].substring(0, 1));
    }

    return result;
}

const arrowFirstLettersArray = (array) => {
    return array.map((element) => element.substring(0, 1));
};

// Invoca la funzione qui e stampa il risultato in console
console.log(firstLettersArray(names));
console.log(arrowFirstLettersArray(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
