/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
function helloDay(name) {
    const hour = new Date().getHours();

    // Se è mattina
    if (hour >= 6 && hour < 13) return `Buongiorno ${name}`;
    // Se è pomeriggio
    else if (hour >= 13 && hour < 17) return `Buon pomeriggio ${name}`;
    // Se è sera
    else return `Buonasera ${name}`;
}

const arrowHelloDay = (name) => {
    const hour = new Date().getHours();

    // Se è mattina
    if (hour >= 6 && hour < 13) return `Buongiorno ${name}`;
    // Se è pomeriggio
    else if (hour >= 13 && hour < 17) return `Buon pomeriggio ${name}`;
    // Se è sera
    else return `Buonasera ${name}`;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(helloDay(name));
console.log(arrowHelloDay(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
