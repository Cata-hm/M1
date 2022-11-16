'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Factorización:
  // num | i
  // 180 | 2
  // 90  | 2
  // 45  | 3
  // 15  | 3
  // 5   | 5
  // 1   |   
  // ponemos los numeros en un array empezando del 1 pero en el orden de menor a mayor quedando asi:
  //  [1, 2, 2, 3, 3, 5]
  // Tu código:

  var factores = [1]; // declaramos los factores y agregamos d euna vez el 1 para mas facilidad.
  var i = 2 // i va a se el nro por el cual comienza la factorización el cual es 2.
  while(num !== 1) { // la condición para el bucle while es que mientras q el numero sea distinto de 1 haga el bucle
    if(num % i === 0) { // El modulo % i debe ser igual 0 ya que si me da 0 en el resto (num % i), quiere decir que es divisible.
      factores.push(i); // cuando encuentra el valor de i ideal, y pusheamos el valor
      num = num/i; // nuestro nuevo num será la división de num entre el i que pusheamos
    } else {
    i++; //esto es para continuar cuando el nro no es divisible entre 2 entonces que le sume 1 al i
    }
  }
  return factores; // retorna los factores pusheados
}

function bubbleSort(array) { // este compara entre parejas
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // ejemplo:
  // [ 5, 4, 1, 2, 3]
  // [ i, i+1 ....  ]
  // Tu código:

  var cambio = true; // var cambio empieza valiendo true
  while (cambio) { // mientras que 
    cambio = false; // cambio sea falso hago el bucle de for
    for(let i = 0; i < array.length - 1; i++) { 
      if (array[i] > array[i + 1]) { // si array i es menor que array i+1 entonces hago lo siguiente
        //swap (bucle para cambiar valores y moverse en el array)
        var aux = array[i]; // esta variable auxiliar me servirá para el swap, guardara el array anterior a cuando lo modifique
        array[i] = array[i + 1]; // acá digo que ahora array i es igual a array i + 1
        array[i + 1] = aux; // entonces ahora es como decir que array i+1 se convierte en array i
        cambio = true; // cambian de puesto los array y será true, asi se repite el bucle hasta que sea false
      }
    }
  }
  return array; // cuando el bucle es false, ya retorno el nuevo arreglo.
}

function insertionSort(array) { // este compara el de menor valor con elementos anteriores y lo ubica adelante del que sea mayor de uno en uno
  // AAUUUX!
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // ejemplo:
  // [ 4 ,  1,  5,  2,  3 ] elementos desordenados
  // [ 0 ,  1,  2,  3,  4 ] posiciones
  // [ - ,  i,  -,  -,  - ] posiciones de i
  // [i-1,  -,  -,  -,  - ] posiciones de i-1
  // [ j ,  -,  -,  -,  - ] posiciones de j
  // aux = valor en i

  // [ 4 ,  1,  5,  2,  3 ] elementos desordenados
  // [ 0 ,  1,  2,  3,  4 ] posiciones
  // [ - ,  i,  -,  -,  - ] posiciones de i
  // [i-1,  -,  -,  -,  - ] posiciones de i-1
  // [ j ,  -,  -,  -,  - ] posiciones de j
  // aux = 1 mueve el 1 a la posición del 4

  // [ 1 ,  4,  5,  2,  3 ] elementos desordenados
  // [ 0 ,  1,  2,  3,  4 ] posiciones
  // [ - ,  -,  i,  -,  - ] posiciones de i
  // [ - ,i-1,  -,  -,  - ] posiciones de i-1
  // [j-1,  j,  -,  -,  - ] posiciones de j
  // aux = 5 como 5 es mayo 4 y j mayor que cero avanza hacia adelante

  // [ 1 ,  4,  5,  2,  3 ] elementos desordenados
  // [ 0 ,  1,  2,  3,  4 ] posiciones
  // [ - ,  -,  -,  i,  - ] posiciones de i
  // [ - ,  -,i-1,  -,  - ] posiciones de i-1
  // [ - ,j-1,  j,  -,  - ] posiciones de j
  // aux = 2 como es menor retrocede con el j-1 en el bucle de for y ubica el 2 entre el 1 y 4, y así mismo avanza hacia adelante para continuar el ordenamiento

  // [ 1 ,  2,  4,  5,  3 ] elementos desordenados
  // [ 0 ,  1,  2,  3,  4 ] posiciones
  // [ - ,  -,  -,  -,  i ] posiciones de i
  // [ - ,  -,  -,i-1,  - ] posiciones de i-1
  // [ - ,  -,j-1,  j,  - ] posiciones de j
  // aux = 3 como es menor retrocede con el j-1 en el bucle de for y ubica el 3 entre el 2 y 4, y así mismo avanza hacia adelante para continuar el ordenamiento

  //[ 1 ,  2,  3,  4,  5 ] elementos ordenados, finalmente devuelve el array

  // Tu código: compara el 5 con el 4 como es mayor, avanza hacia delante con la ayuda del for
  for( let i = 1; i < array.length; i++) { //inicia desde la posición 1 ya que ese es el que toma para compararlo con el anterior, y mueve i si es el caso
    var j = i - 1;
    var aux = array[i];
    while (j >= 0 && array[j] > aux) { // mientras que j sea >= o y array de J > aux, me corro a la izquierda y uso aux porque pisé el valor de array[i]
      array[j + 1] = array[j]; // el array de j+1 que es el q esta adelante de j, pasa a ser array j que es i-1
      j--; // Toma el valor menor y lo mueve una posición hacía atras y vuelve a hacer el while hasta que ya no cumpla las condiciones
    }
    array[j + 1] = aux // cuando ya no cumple las condiciones del while retorna a j+1 como aux quien es el guarda el valor que se estaba moviendo y lo ubica ahí
  }
  return array; // cuando ya se acaba el bucle retorna el array ordenado.
}


function selectionSort(array) {
  // ojo con como guardamos el índice del mas chiquito que encontramos!!
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  //ejemplo:
  // [  3,  4,  1,  5,  2]
  // [  i,i+1,  -,  -,  -]
  // [  j,j+1,  -,  -,  -]
  // min = valor en i    ...este funciona como un auxiliar.  
  // Tu código:
  for (let i = 0; i < array.length -1; i++) { // recorre todo el array menos el ultimo porque al final será el mayor y no tiene sentido
    var min = i; // inicio suponiendo que el valor minimo es el primer nro del array
    for (let j = i + 1; j < array.length; j++) { // con este for se busca el nro menor
      if ( array[j] < array[min]) { 
        min = j;
      }
    }
    if (min !== i) { // cuando encuentro el valor mínimo, hago el swap con if
      var aux = array[i]; // esta variable auxiliar me servirá para el swap, guardara el array que está ubicado donde voy a poner el mínimo
      array[i] = array[min]; // acá digo que ahora array i es igual a array min (el valor mínimo)
      array[min] = aux; // entonces ahora es como decir que array [min] se convierte en el aux (el valor que tenia guardado, el que estorbaba pa poner el mínimo)
    }
  }
  return array; // retorna el nuevo array ordenado
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
