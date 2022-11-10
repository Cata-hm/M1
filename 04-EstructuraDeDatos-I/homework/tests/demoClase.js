function cuentaRegresiva(num) {
    console.log(num);
    cuentaRegresiva(num-1);
}
// Entonces se deberá poner un limite para que no exceda la fiila de ejecución y por ende no se corte la función ella misma. 
function cuentaRegresiva(num) {
    console.log(num);
// El nro es igual a cero?
    if (num === 0){
//Si el nro es igual a cero se termina la función.
        return "Fin";
    }else{
//Si el nro no es igual a cero retorna la función.
        cuentaRegresiva(num-1);
    }
}
//------------------------------------------
// !5 = 5*4*3*2*1 = 5*!4 = 120      5*4*3*2*1*1
// !4 = 4*3*2*1 = 4*!3 = 24         4*3*2*1*1
// !3 = 3*2*1 = 3*!2 = 6            3*2*1*1
// !2 = 2*1 = 2*!1 = 2              2*1*1
// !1 = 1*1 = 1*!0 = 1              1*1
// !0 = 1

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num-1);
}

console.log(factorial(num));

// factorial(0) -> 1 ------------------> 1
// factorial(1) -> 1 * factorial (0)  -> 1*1
// factorial(2) -> 2 * factorial (1)  -> 2*1*1
// factorial(3) -> 3 * factorial (2)  -> 3*2*1*1
// factorial(4) -> 4 * factorial (3)  -> 4*3*2*1*1
// factorial(5) -> 5 * factorial (4)  -> 5*4*3*2*1*1

//--------------------------------------------------

// ESTRUCTURA DE DATOS

//Los datos pueden ser cualquier cosa, arrays, string, etc
var misNumeros = [1, true, 3, "string", 5, [10,false], {a: "hola"}];

var pares = [2, 4, 6, 6, 8, 8, 10];
const miSet = new Set(pares)
console.log(miSet)
console.log(miSet.size)

for (let elQueYoQuiera of miSet) {
    console.log(elQueYoQuiera);
}
//--------------------------------------------------
// IMPLEMENTACIÓN CLASE STACK
// LIFO = LAST IN, FIRST OUT

function stack() {}
var miStack [];
miStack.push(5);
miStack.push(10);
miStack.pop();

// El stack no puede ser un array, por tener otros elementos, pero el stack va a usar el array para poner otros elementos y eso se hace de la siguiente forma.
function Stack() {
    this.arr = [];
}

Stack.prototype.push = function (volver) {
    this.arr.push(value);
};

Stack.prototype.pop = function () {
    this.arr.pop();
}

Stack.prototype.size = function () {
    return this.arr.arr.length;
}

var miStack = new Stack();
console.log(miStack); // stack {} arr: []}
miStack.push(10);
console.log(miStack); // stack {} arr: [10]}
miStack.push(5);
miStack.push(7);
console.log(miStack); // stack {} arr: [10,5,7]}
miStack.pop();
console.log(miStack); // stack {} arr: [10,5]}
console.log(miStack.size()); // 2

//--------------------------------------------------
//IMPLEMENTACIÓN CLASE QUEUE
//FIFO = FIRST IN, FIRST OUT
//agregaremos con push y sacamos unshift.
 function Queue(){
    Queue.prototype.enqueue = function(){}
 }