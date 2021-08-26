

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

let mailList = ["ciccio@bello.com", "gino@pasticcino.it", "mario@ttide.com", "seren@ata.net", "las@palmas.it"];

let accesso = prompt("inserisci la tua mail per accedere");

let verificaMail = false;

for (let i = 0; i < mailList.length; i++){

    let mailCheck = mailList[i];

    if (mailCheck == accesso){
        verificaMail = true;
    }
}

if (verificaMail == true){
    alert("benvenido");
}else if (verificaMail == false){
    alert("tu non puoi passare");
}
