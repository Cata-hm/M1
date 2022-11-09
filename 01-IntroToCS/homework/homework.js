'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let suma = 0;
  for (let i = 0; i < num.length; i++) {
     suma += +num[i] * 2 ** (num.length - 1 - i);
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = ''
  while (num > 1) {
    let residuo = num % 2
    binario = `${residuo}${binario}`
    num = (num - residuo) / 2
  }
  binario = `${num}${binario}`
  return binario
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}