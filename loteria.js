

var button = document.getElementById('botuno');
button.onclick = function() {
    var div = document.getElementById('tabla1');
    if(div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

var button = document.getElementById('botdos');
button.onclick = function() {
    var div = document.getElementById('tabla2');
    if(div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

var button = document.getElementById('bottres');
button.onclick = function() {
    var div = document.getElementById('tabla3');
    if(div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

var button = document.getElementById('botcuatro');
button.onclick = function() {
    var div = document.getElementById('cartasAuto');
    if(div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
let contador = 0;
function marcarCarta(id){
    contador++;
    let carta = document.getElementById(id)
    carta.style = "background-color:blue"
    if (contador == 16) {
        alert("¡LOTERÍA!");
    }
}

let cartas = document.getElementsByClassName('cartaLoteria');
for(let i = 0; i < cartas.length; i++) {
    cartas[i].addEventListener('click', ()=> marcarCarta(i+1), { once: true })
}

var i = 0;
var images = [];
var time = 3000;

// Image List
images[0] = "cartas/1.jpg";
images[1] = "cartas/2.jpg";
images[2] = "cartas/3.jpg";
images[3] = "cartas/4.jpg";
images[4] = "cartas/5.jpg";
images[5] = "cartas/6.jpg";
images[6] = "cartas/7.jpg";
images[7] = "cartas/8.jpg";
images[8] = "cartas/9.jpg";
images[9] = "cartas/10.jpg";
images[10] = "cartas/11.jpg";
images[11] = "cartas/12.jpg";
images[12] = "cartas/13.jpg";
images[13] = "cartas/14.jpg";
images[14] = "cartas/15.jpg";
images[15] = "cartas/16.jpg";
images[16] = "cartas/17.jpg";
images[17] = "cartas/18.jpg";
images[18] = "cartas/19.jpg";
images[19] = "cartas/20.jpg";
images[20] = "cartas/21.jpg";
images[21] = "cartas/22.jpg";
images[22] = "cartas/23.jpg";
images[23] = "cartas/24.jpg";
images[24] = "cartas/25.jpg";
images[25] = "cartas/26.jpg";
images[26] = "cartas/27.jpg";
images[27] = "cartas/28.jpg";
images[28] = "cartas/29.jpg";
images[29] = "cartas/30.jpg";
images[30] = "cartas/31.jpg";
images[31] = "cartas/32.jpg";
images[32] = "cartas/33.jpg";
images[33] = "cartas/34.jpg";
images[34] = "cartas/35.jpg";
images[35] = "cartas/36.jpg";
images[36] = "cartas/37.jpg";
images[37] = "cartas/38.jpg";
images[38] = "cartas/39.jpg";
images[39] = "cartas/40.jpg";
images[40] = "cartas/41.jpg";
images[41] = "cartas/42.jpg";
images[42] = "cartas/43.jpg";
images[43] = "cartas/44.jpg";
images[44] = "cartas/45.jpg";
images[45] = "cartas/46.jpg";
images[46] = "cartas/47.jpg";
images[47] = "cartas/48.jpg";
images[48] = "cartas/49.jpg";
images[49] = "cartas/50.jpg";
images[50] = "cartas/51.jpg";
images[51] = "cartas/52.jpg";
images[52] = "cartas/53.jpg";
images[53] = "cartas/54.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
	  i++;
	} else {
		i = 0;
	}
	setTimeout("changeImg()", time);
}
window.onload=changeImg;