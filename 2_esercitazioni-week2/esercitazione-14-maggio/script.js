// ! Esercizi:
// - definiamo variabile che contiene una stringa
    const string1 = "Sono una stringa.";
    console.log(string1);
    // TODO1 - Usiamo i doppi apici e salviamo la stringa: Ciao Mondo!
    const string2 = "Hello world!";
    console.log(string2);
    // TODO2 - Usiamo i singoli apici e salviamo la stringa: Mio zio viene dalla città di l'Aquila
    // - Occhio ad usare un escape per i singoli apici dentro la stringa!!
    const string3 = 'Mio zio viene dalla città di l\'Aquila.';
    console.log(string3);
    // TODO3- Usiamo il backtick per concatenare le due stringhe precedenti dentro una nuova, usiamo anche "l'andata a capo"
    const string4 = `${string2}
    ${string3}`;
    console.log(string4);

// - Creiamo una nuova variabile in cui inseriamo una variabile precedente che modifichiamo portato il tutto in maiuscolo (.toUpperCase())
const string2Upper = string2.toUpperCase();
console.log(string2Upper);
// TODO1 - Definiamo una variabile e salviamo all'interno un dato passato dall'utente tramite prompt()
const userInput = prompt("Il tuo nome");
// TODO1 .1 - Facciamo un console.log del dato precedento portato a lowercase
console.log(userInput.toLowerCase());

// - Chiediamo al nostro user un numero da uno a 10 tramite prompt e solo se maggiore di 7 esclamare in console che ha vinto!
/* - tips:
        prompt('Dammi un numero da uno a dieci!'); // occhio che il prompt torna una stringa!!
        if(... > 7 ){

        }
    */
        const userNumber = Number(prompt("Dammi un numero da uno a dieci!"));
        if (userNumber >= 1 && userNumber <= 10 && Number.isNaN(userNumber) === false){
            if (userNumber > 7 && userNumber <= 10){
                alert("Hai vinto!");
            } else {
                alert("Ritenta :(")
            } 
        } else {
            alert("Il numero inserito non è valido.");
        }