//------------------------------------------------------------------------------------------
function merge(left, right) {
    var mergedArray = [];
    var leftIndex = 0;
    var rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if(left[leftIndex] < right[rightIndex]) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return mergedArray.concat(left.slice(leftIndex).concat(right.slice(rightIndex)))
  }
  
  function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    if (array.length ===1) { // si el array es de 1 valor
      return array; // retorna el array
    }
    var middle = Math.floor(array.length/2) //si no divide el array en dos
    var left = array.slice(0, middle) // aca está diciendo que el array izquierdo empieza en 0 y termina en el middle
    var right = array.slice(middle) //aca dice que empieza en middle
  
    return merge(mergeSort(left), mergeSort(right)); //retorna el array unido
  }
  //-----------------------------------------------------------------------------------------------
  function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    if (array.length <=1) {
      return array
    }
    var middle = Math.floor(array.length/2)
    var right = array.slice(middle)
    var left = array.slice(0, middle)
    return merge(mergeSort(left), mergeSort(right))
  }
  function merge(left,right) {
    var arr = []
  
    while(left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift())
      } else {
        arr.push(right.shift())
      }
    }
    return [...arr, ...left, ...right]
  }
  