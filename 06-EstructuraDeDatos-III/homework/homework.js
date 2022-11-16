"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  };
  
  BinarySearchTree.prototype.size = function(value) {
    if(!this.left && !this.right) {  // Pregunto si no tengo nada en left y ni en right
      return 1; //si no hay nada a ningun lado retorno 1 para el root del arbol
    }
    if(this.left && this.right) { // pregunto si tiene algo en left y en right
      return 1 + this.left.size() + this.right.size(); //retorno 1 (root) + lo que hay a mi left y lo que hay a mi right
    }
    if (this.left) { //Pregunto si tengo algo solo a la izquierda
      return 1 + this.left.size(); // retorno 1 (root) +lo que hay a mi left 
    }
    if (this.right) { //Pregunto si tengo algo solo a la derecha
      return 1 + this.right.size(); // retorno 1 (root) +lo que hay a mi right
    }
  };
  
  BinarySearchTree.prototype.insert = function(value){
    if (value < this.value) { //pregunto si el valor a ingresar es menor que el del nodo
      if(!this.left){ //si no hay nada en la izquierda
        this.left = new BinarySearchTree(value); //crea un nuevo nodo e ingresa el valor a la izquierda
      } else { // además
        this.left.insert(value); //que si el siguiente nodo está ocupado pase al siguiente
        return value;
      }
    } else { //además
        if(!this.right) { //si el valor a ingresar es mayor que el del nodo
          this.right = new BinarySearchTree(value); //crea un nuevo nodo e ingresa el valor a la derecha
        } else { // además
          this.right.insert(value); //que si el siguiente nodo está ocupado pase al siguiente
          return value;
        }
      }
  };
  
  BinarySearchTree.prototype.contains = function(target){ // uso target y no value porque este es el objetivo a buscar
    if(target === this.value) { //pregunto si el objetivo (target) es igual al valor del nodo
      return true; //si es igual retorno true
    }
    if(target < this.value) { //Pregunto si el objetivo (target) es menor al valor del nodo
      if(!this.left) return false; //si es menor debe moverse a la izquierda y si en la izquierda no hay nada devuelve falso
        return this.left.contains(target); //si es menor debe moverse a la izquierda y si en la izquierda está lo que busco, devuelve el objetivo (target)
    }
    if(!this.right) return false; //pero si es mayor debe moverse a la derecha y si en la derecha no hay nada devuelve falso
    return this.right.contains(target);//si es mayor debe moverse a la derecha y si en la derecha está lo que busco, devuelve el objetivo (target)
  };
  
  BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
    if(order === "pre-order") { //recorre el arbol si el orden es tipo pre order (THIS.VALUE (root) - LEFT - RIGHT)
      cb(this.value);
      if(this.left) {
        this.left.depthFirstForEach(cb, order);
      }
      if(this.right) {
        this.right.depthFirstForEach(cb, order);
      }
    }
    // no funciona no se porque?
    else if(order === "in-order" || undefined) { //recorre el arbol si el orden es tipo pre order (LEFT - THIS.VALUE (root) - RIGHT)
      if(this.left) {
        this.left.depthFirstForEach(cb, order);
      }
      cb(this.value);
      if(this.right) {
        this.right.depthFirstForEach(cb, order);
      }
    }
    else if(order === "post-order" || undefined) { //recorre el arbol si el orden es tipo pre order (LEFT - RIGHT - THIS.VALUE (root))
      if(this.left) {
        this.left.depthFirstForEach(cb, order);
      }
      if(this.right) {
        this.right.depthFirstForEach(cb, order);
      }
      cb(this.value);
  }
}
  
  BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []) {
    cb(this.value); //se hace callback del this.value (root o head)
    if(this.left) { //Pregunto si tengo algo a la izquierda
      array.push(this.left); //si, sí tengo algo a la izquierda lo pusheo al array
    }
    if (this.right) { //Pregunto si tengo algo a la derecha
      array.push(this.right); //si, sí tengo algo a la izquierda lo pusheo al array
    }
    if (array.length > 0) { //Pregunto si array es mayor que cero
      array.shift().breadthFirstForEach(cb, array) //si es mayor que 0, continúo sacando los elementos uno por uno con (array.shift())y hago el llamado recursivo de la función con (.breadthFirstForEach) la cual está esperando el callback y el array.
    }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
