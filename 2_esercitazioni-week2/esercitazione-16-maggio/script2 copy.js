// TODO 2: Raccogliamo tramite prompt (eseguito tre volte) 3 parole dall'utente, per ogni parola ricevuta mostriamo in console "vocale" o "consonante" in base alla prima lettera. Usiamo un solo console.log per ogni parola sfruttando la potenzialità dell'operatore ternario.

const vocali = "aeiou";
let parola;

parola = prompt("Scrivi la prima parola:");

// null -> false
// "" -> false
// "ciao" ->
// if(typeof parola === "string"){...} || if(typeof parola === "string" || parola.length > 0){...} || if(parola){...}

if(parola){
  const firstChar = parola.trimStart().at(0).toLowerCase();
  const isVocale = vocali.includes(firstChar);
  console.log(isVocale ? "vocale" : "consonante");
}


parola = prompt("Scrivi la prima parola:");

if(parola){
  const firstChar = parola.trimStart().at(0).toLowerCase();
  const isVocale = vocali.includes(firstChar);
  console.log(isVocale ? "vocale" : "consonante");
}


parola = prompt("Scrivi la prima parola:");

if(parola){
  const firstChar = parola.trimStart().at(0).toLowerCase();
  const isVocale = vocali.includes(firstChar);
  console.log(isVocale ? "vocale" : "consonante");
}