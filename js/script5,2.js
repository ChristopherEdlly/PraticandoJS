let f = window.prompt("Digite uma frase");


document.write(f + "<br>");
let tamanho = f.length;
for (let i = 0; i < tamanho; ) {
    document.write("<br> Caractere na posição " + i + " : " + f.charAt(i));
    i++
}
document.write("<br><br> Primeiro caractere: " + f.charAt(0) + "<br />");
document.write("Último caractere: " + f.charAt(f.length-1));