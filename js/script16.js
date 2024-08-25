let dia = new Date()
let hora = dia.getHours()

if (hora < 18) {
    document.write('<img src= "../imagem/img2.jpg ">');
} else {
    document.write('<img src= "../imagem/img1.jpg ">');
}