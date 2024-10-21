/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function arrayStartLetter(array, letter) {
    let result = [];

    for (let i = 0; i < array.length; i++)
        if (array[i].substring(0, 1) === letter.toUpperCase())
            result.push(array[i]);

    return result;
}

const arrowArrayStartLetter = (array, letter) => {
    return array.filter(
        (element) => element.substring(0, 1) === letter.toUpperCase()
    );
};

// Invoca la funzione qui e stampa il risultato in console
console.log(arrayStartLetter(names, "a"));
console.log(arrowArrayStartLetter(names, "a"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
