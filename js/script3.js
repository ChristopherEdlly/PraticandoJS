let nome1 = window.prompt("Qual é o seu nome?");

if (nome1 != null && nome1 != "") {
    document.querySelector(".nome").innerHTML = "Ola," + nome1;
}else{
    document.querySelector(".nome").innerHTML = "Ola, Visitante";
}
