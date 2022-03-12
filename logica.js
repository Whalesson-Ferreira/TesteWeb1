import {validarCampoNota} from './funcoes.js';

var btnCalcular = document.getElementById('idCalcular');
var btnLimpar = document.getElementById('idLimpar');
var inputNota1 = document.getElementById('idNota1');
var inputNota2 = document.getElementById('idNota2');
var pMedia = document.getElementById('idMedia');

function verificarCampos() {
  let n1 = inputNota1.value;
  let n2 = inputNota2.value;
  if(n1 === '' || n2 === '') {
    alert('Preencha os campos em branco!');
  }
  else{
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    calcularMedia(n1, n2);
  }
}

function calcularMedia(nota1, nota2){
  let media = (nota1+nota2)/2;
  pMedia.innerHTML = 'Média: '+media;
  // pMedia.style.color = 'red'
}

btnCalcular.onclick = function (){
 verificarCampos();
}

btnLimpar.onclick = function() {
  inputNota1.value = '';
  inputNota2.value = '';
  pMedia.innerHTML = 'Média: ';
  // pMedia.style.color = 'black'
}

inputNota1.oninput = function(ev) {
  validarCampoNota(inputNota1)
};

inputNota2.oninput = function() {
  validarCampoNota(inputNota2)
};

inputNota1.onkeydown = function(ev) {
  if(ev.code === 'Enter') {
    verificarCampos();
  }
}

inputNota2.onkeydown = function(ev) {
  if(ev.code === 'Enter') {
    verificarCampos();
  }
}
