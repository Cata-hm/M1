const { HashTable } = require("./homework");

function Node(value){
    this.value = value;
    this.next = null
}

function LinkedList(){
    this.head = null;
}

const miNodo =new Node(5);
const miOtroNodo = new Node(7);

miNodo.next = miOtroNodo;

console.log(miNodo);

const miLista = new LinkedList();

console.log(miLista);

miLista.head = miNodo;

console.log(miLista);
//---------------------------------------------
//miListaDemo.add(10);
//Que quiero que haga add?
//Quiero que:
//1. instanciar un nodo
//2.Inserte al final de la lista
//3. Cuando la lista no tiene nada, instarlo en el HEAD
//4. Si ya tengo algo, colocarlo al final, donde next sea
function Node(value){
    this.value = value;
    this.next = null
}

function LinkedList(){
    this.head = null;
}

LinkedList.prototype.add = function (value) {
    // si quiero añadir un nuevo nodo lo creo aca debajo
    const newNode = new Node(value);

    //si no tenemos head, insertamos el nodo en HEAD
    if (this.head === null) this.head =newNode;
    // si ya tengo HEAD entonces lo siguiente
    else{
        this.head.next = newNode;
    }
};

const miListaDemo = new LinkedList();
console.log(miListaDemo);

miListaDemo.add(10);
miListaDemo.add(15);
miListaDemo.add(7);
console.log(miListaDemo);

//---------------------------------------------

const obj1 = {
    a: null,
    b: null,
};

const obj2 = {
    a: null,
    b: null,
};

obj1.a = obj2;

console.log(obj1);

//---------------------------------------------
function Node(value){
    this.value = value;
    this.next = null
}

function LinkedList(){
    this.head = null;
}

LinkedList.prototype.add = function (value) {
    // si quiero añadir un nuevo nodo lo creo aca debajo
    const newNode = new Node(value); // se hace con constante porque es algo que no se va a cambiar nunca.

    //current es una variable que apunta a un objeto y se convierte en lo que apunta y de esa forma va a guardar la ref del nuevo nodo en el ultimo nodo de la lista.
    let current = this.head;

    //aqui reviso si tengo algo en HEAD, sino agrego el nodo, si current es null entonces...
    if (current === null) {
        //... que el nuevo nodo sea guardado en el head 
        this.head = newNode;
        return value;
    }
    
    //si current no es null entra a hacer el while hasta que sea null en algun nodo.
    //mientras q tenga un next distinto de null me voy a mover hasta llegar a un null (un nodo que no contiene otro nodo)
    while(current.next !== null){ //aqui pregunta si current.next tiene un nodo distinto de null?
        current = current.next;
    }
    current.next = newNode;
    return value;
};

const miListaDemo = new LinkedList();
console.log(miListaDemo);

miListaDemo.add(10);
miListaDemo.add(15);
miListaDemo.add(7);
miListaDemo.add(25);
console.log(miListaDemo);

//---------------------------------------------

//HashTable

function HashTable() {
    this.numBackets = 35;
    this.buckets = [];
}
HashTable.prototype.hash

//---------------------------------------------
function HashTable() {
    this.numBackets = 35;
    this.buckets = [];
}

function hash(string){

    //JORGE
    //J => charCodeAt => código numérico de J = 10
    //O => charCodeAt => código numérico de O = 5
    //R => charCodeAt => código numérico de R = 6
    //G => charCodeAt => código numérico de G = 12
    //E => charCodeAt => código numérico de E = 1
    // TOTAL = 34
    //resultado = total % numBuckets => NUMERO que es un indice.


    //-------------------TAREA AVANCE ----------------------------------------TAREA AVANCE--------------------------------
    
    function Node(value){
        this.value = value;
        this.next = null
    }
    
    function LinkedList(){
        this.head = null;
        this._length = 0
    }
    
    LinkedList.prototype.add = function (value) {
        const newNode = new Node(value);
        let current = this.head;
    
        if (current === null) {
            this.head = newNode;
            return value;
        }
    
        while(current.next !== null){ 
            current = current.next;
        }
        current.next = newNode;
        return value;
    }
    //-------------------------------------------
    LinkedList.prototype.remove = function (value) {
        // Devuelve null cuando intentamos eliminar un valor de un nodo en un una lista vacía
        if (this.head === null) {
          return null;
        } 
        //remueve el nodo HEAD y convierte el 2do nodo en HEAD
        if (this.head.value === value) {
          this.head = this.head.next;
          this._length
          return value
        } else { // para remover un valor inBetween
          let currNode = this.head
          while (currNode.next && currNode.next.value !== value) {
            currNode = currNode.next;
          }
          if(currNode.next){
            const removedNode = currNode.next
            currNode.next = removedNode.next
            this._length
            return value
          }
          return null // retorna null si el valor que intentamos eliminar no existe en la lista
        }
      }
    //-------------------------------------------
    LinkedList.prototype.search = function (value) {
        if (this.head === null) {
            return null;
        }
        let i = 0
        let curr = this.head
        while(curr) {
            if(curr.value === value) {
                return i
            }
            curr = curr.next
            i++
        }
        return null
    }
    
    
    const list = new LinkedList();
    console.log(list);
    
    list.add(10);
    list.add(25);
    list.add(30);
    list.add(8);
    list.add(20);
    console.log(list);
    
    console.log(list.search());