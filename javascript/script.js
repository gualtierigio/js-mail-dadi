

let dadoMio = parseInt( (6 * Math.random() ) ) + 1;
let dadoGiocatore = parseInt( (6 * Math.random() ) ) + 1;

if (dadoGiocatore > dadoMio){
    dadoGiocatore = "Ho vinto";
    dadoMio = "ho perso";
}else if(dadoMio > dadoGiocatore){
    dadoMio = "ho vinto";
    dadoGiocatore = "ho perso";
}else {
    dadoMio = "siamo pari";
    dadoGiocatore = "siamo pari";
}

console.log(dadoGiocatore)