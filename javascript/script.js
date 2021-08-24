

let dadoMio = parseInt( (6 * Math.random() ) ) + 1;
let dadoGiocatore = parseInt( (6 * Math.random() ) ) + 1;

if (dadoGiocatore > dadoMio){
    dadoGiocatore = "vince il giocatore!";
    dadoMio = "ho perso :,(";
}else if(dadoMio > dadoGiocatore){
    dadoMio = "vince il banco!";
    dadoGiocatore = "hai perso :,(";
}else {
    dadoMio = "siamo pari";
    dadoGiocatore = "siamo pari";
}

console.log(dadoGiocatore)
console.log(dadoMio)

let clientsMail = ["ciccio@bello.com", "gino@pasticcino.it", "mario@ttide.com", "seren@ata.net", "las@palmas.it"]

document.getElementById("accesso").innerHTML

if (accesso != clientsMail){
    alert = "tu non puoi passare";
}else {
    print("sei il benvenuto");
}
