function menuShow() {
    let menuMobile = document.querySelector('.menu__mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./assets/iconsmenu2.png"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./assets/icons8.png"
    }
}

var texto = "Habilidades";
var atraso = 200;
var textoElemento = document.querySelector(".nome-about-destaque");


var contadorDeLetras = 0;
function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();
