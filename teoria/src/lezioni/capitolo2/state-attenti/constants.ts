export const solutions = {
  first: `Il valore di state è 0, stai dicendo 3 volte che state è 0 + 1, quindi alla fine state sarà 1.`,
  second: `Nel momento in cui abbiamo l'allert, state non è ancora stato aggiornato, non è che si aggiorna una volta sola`,
  third: `Lo stato nell'alert è stato programmato quando il suo valore era 0, nonostante sia stato aggiornato subito dopo`,
  fourth: `Questa è un updater functions, react inserisce in coda a tutto il codice nell'evento l'esecuzione delle funzioni di update e poi le esegue`,
  fifth: `Le updater functions ci permettono di accedere al valore più aggiornato dello stato, e devono ritornare il nuovo valore dello stato`,
}
