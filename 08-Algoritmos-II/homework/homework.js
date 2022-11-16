'use strict'

const { merge } = require("@11ty/eleventy/src/TemplateData");

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  var left = [];
  var right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var len = array.length;

  if( len <= 1) {
  	return array;
  }

  var middle = Math.floor(len/2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);

  right = mergeSort(right);
  left = mergeSort(left);

  	var arr = [];

	while (left.length && right.length) {
		if(left[0] < right[0]) {
			arr.push(left.shift());
		} else {
			arr.push(right.shift());
		}
	}
	return arr.concat(left, right);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
