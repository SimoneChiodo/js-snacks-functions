/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function countVowels(string) {
    let vowelsCount = 0;
    let vowelsArray = ["a", "e", "i", "o", "u"];
    let vowelsFound = [];

    // Per ogni lettera della stringa
    for (let i = 0; i < string.length; i++) {
        // Controllo ogni vocale
        for (let y = 0; y < vowelsArray.length; y++) {
            if (string[i] === vowelsArray[y]) {
                vowelsCount++;
                vowelsFound.push(string[i]);
            }
        }
    }

    return vowelsCount + ` (${vowelsFound.join(", ")})`;
}

const arrowCountVowels = (string) => {
    let vowelsCount = 0;
    const vowelsArray = ["a", "e", "i", "o", "u"];
    let vowelsFound = [];

    string.split("").forEach((char) => {
        if (vowelsArray.includes(char)) {
            vowelsCount++;
            vowelsFound.push(char);
        }
    });

    return vowelsCount + ` (${vowelsFound.join(", ")})`;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));
console.log(arrowCountVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
