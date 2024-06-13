Esercizio 1:
Abbiamo visto oggi la possibilità di utilizzare altri due metodi http ovvero PUT e PATCH , sempre sulla base della fantastica api: https://api.escuelajs.co/ dopo aver creato un prodotto con il metodo POST modifichiamolo in parte o interamente, verificate che effettivamente il nostro prodotto è stato aggiornato sul database facendo un getById dello stesso

Esercizio 2:
Dopo averlo modificato cancelliamolo con il metodo DELETE

Esercizio 3:
Gestiamo gli eventuali errori per esempio dentro la POST come abbiamo visto insieme sfruttando trycatch statement, va benissimo un errore in console log customizzato, l'importante è che passi dal catch!

Esercizio 4(opzionale):
Proprio come abbiamo fatto insieme, perchè non proviamo a mostrare a DOM gli errori specifici? tipo se manca il title etc? CATEGORY saltatelo tranquillamente

Esercizio 5 (EXTRA - opzionale)\*:
Eheh, che ne dite di modificare una risorsa esistente sfruttando il form che abbiamo pronto sul dom? cioè
  -selezioniamo un id magari da un campo input di tipo "select by id" inserite l'id, al click fate la get dell'id e riempite i valori del prodotto dentro il form
  (cioè vi ritroverete il campo input compilato con i valori del prodotto che avete cercato per id)

  -fatto questo date la possibilità di cambiare le varie proprietà dai vari campi input e al click di send, magari se vi aiuta fate un secondo button specifico per l'update, al click di questo farete una PUT che aggiornerà proprio questo prodotto
