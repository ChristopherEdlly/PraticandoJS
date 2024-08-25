let dia = new Date();
let hora = dia.getHours();
let minuto = dia.getMinutes();

if ((hora == 1) || (hora == 2) || (hora == 3) || (hora == 4) || (hora == 5) ) {
    document.write("Vai Dormir Cara! Já Tentou o Lofi? Tente um Chico Buarque Então kkk!");
}

if ((hora == 6) || (hora == 7) || (hora == 8) || (hora == 9) || (hora == 10) || (hora == 11)) {
    document.write("Bom Dia!");
}

if (hora == 12){
    document.write("Bora Almoçar?!");
}

if ((hora == 13) || (hora == 14) || (hora == 15) || (hora == 16) || (hora == 17)){
    document.write("Boa Tarde!");
}

if ((hora == 6) || (hora == 19)){
    document.write("Bom Final de Tarde!");
}

if ((hora == 20) || (hora == 21) || (hora == 22)){
    document.write("Boa Noite!");

}

if (hora == 23){
    document.write("Ja Passou da Hora de Dormir nao?!");
}

if (hora == 0){
    document.write("Já é Amanha hehe, Recomendo Ouvir um Lofi as Vezes Ajuda a Dormir!")

}