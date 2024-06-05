// ho un file in una repo: README.md
// creo un nuovo file test.js con un arrayPippo dentro
//* faccio delle modifiche

// impacchetto" tutta la repo per prepararla alla spedizione, cioè la aggiungo alla fase di stage
//* git add .

// cambio idea e voglio impacchettare solo il nuovo file
//* git restore --staged README.md

// consegno la repository al corriere che stampa l'etichetta (si preferisce parlare in inglese con verbi all'infinito)
//* git commit -m "create arrayPippo"
// (a questo punto si può modificare quello che si pusherà ma sconsigliato, è come andare alle poste per riaprire il pacco)

// il corriere porta il pacco alle poste, e adesso dobbiamo spedirlo
// * git push
// (a questo punto non si può più modificare quello che si pusherà)
