function validarCampoNota(inputAtual) {
  const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  let jaInseriuVirgula = false;

  let conteudoDoInput = inputAtual.value;

  for(let index = 0; index < conteudoDoInput.length; index++) {
    if(numeros.includes(conteudoDoInput[index]) === false) {
      conteudoDoInput = conteudoDoInput.substring(0, index) + conteudoDoInput.substring(index+1, conteudoDoInput.length);
      index--;
    }
    else {
      if(index === 0) {
        if(conteudoDoInput[index] === '.') {
          conteudoDoInput = conteudoDoInput.substring(0, index) + conteudoDoInput.substring(index+1, conteudoDoInput.length);
          index--;
        }
      }
      else {
        if(conteudoDoInput[index] === '.') {
          if(jaInseriuVirgula === false) {
            jaInseriuVirgula = true;
          }
          else {
            conteudoDoInput = conteudoDoInput.substring(0, index) + conteudoDoInput.substring(index+1, conteudoDoInput.length);
            index--;
          }
        }
      }
    }
  }
  inputAtual.value = conteudoDoInput;
}

export {validarCampoNota};