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

var texto = "Projetos";
var atraso = 200;
var textoElemento = document.querySelector(".nome-file-destaque");


var contadorDeLetras = 0;
function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();



//var textoAbout = "Habilidades";
//var atrasoAbout = 200;
//var textoElementoAbout = document.querySelector(".nome-about-destaque");


//var contadorDeLetrasAbout = 0;
//function escreverTextoAbout() {
//  if (contadorDeLetrasAbout < textoAbout.length) {
 //   textoAboutElemento.textContent += textoAbout.charAt(contadorDeLetrasAbout);
 //   contadorDeLetrasAbout++;
 //   setTimeout(escreverTextoAbout, atrasoAbout);
///  }
//}

//escreverTextoAbout();