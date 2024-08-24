let nome = window.prompt("Qual é o seu nome?");

if (nome != null && nome != "") {
    document.write("Olá, "+ nome + "!");
}else{
    document.write("Olá, Visitante");
}