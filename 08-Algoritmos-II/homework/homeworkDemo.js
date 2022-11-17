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
  //------------------------------------------------
  // HOMEWORK REVIEW
  //quick sort
  function quickSort(array) {
    let pivot = array[0];
    let left = [];
    let right = [];
    let middle= [];

    for (let i = 0; i < array.length; i++){
      array[i] < pivot && left.push(array[i]); // si el array es menor al pivote y al de la izquierda pusheo el array.
      array[i] > pivot && right.push(array[i]); // si el array es mayor al pivote y al de la derecha pusheo el array.
      array[i] === pivot && middle.push(array[i]); // si el array es igual al pivote y al de la mitad pusheo el array.
    }
    return quickSort(left).concat(middle).concat(quickSort(right));
  }

  //merge sort
  function mergeSort(array) {
    if(array.length <= 1) return array; // si el array es menor o igual a 1 retorna array.

    const middleIndex = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middleIndex);

    merge(mergeSort(left),mergeSort(right)) // sino, acá junto los array izquierdos y derechos ordenados
  }
  function merge(left,right){
    let array = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) { //Si el indice izquierdo y el derecho son menores  a la longitud se hace lo siguiente
      if(left[leftIndex]<right[rightIndex]) { //acá comparo si el nro en la posición 0 del array izq es menor q el nro en la posicion 0 del array derecho
        array.push(left[leftIndex]);
        leftIndex++;
      } else {
        array.push(right[rightIndex]); //sino pusheo right
        rightIndex++;
      }
    }
    return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  //------------------------------------------------



  