"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - insert: agrega un nodo en el lugar correspondiente
  - size: retorna la cantidad total de nodos del árbol
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)


  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
      return value;
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
      return value;
    }
  }
};

BinarySearchTree.prototype.size = function () {
  let count = 1;

  if (this.left) {
    count += this.left.size();
  }
  if (this.right) {
    count += this.right.size();
  }

  return count;
};

// CÓMO PUEDO REARMAR ESTA SOLUCIÓN PARA QUE OCUPE MENOS TIEMPO?
BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true; // NO

  // tengo algo a la izquierda Y el valor está a la izquierda?
  if (this.left && this.left.contains(value)) return true;

  // tengo algo a la derecha Y el valor está a la derecha?
  if (this.right && this.right.contains(value)) return true;

  return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, type) {
  switch (type) {
    case "pre-order":
      cb(this.value);
      if (this.left) this.left.depthFirstForEach(cb, type);
      if (this.right) this.right.depthFirstForEach(cb, type);
      break;

    case "post-order":
      if (this.left) this.left.depthFirstForEach(cb, type);
      if (this.right) this.right.depthFirstForEach(cb, type);
      cb(this.value);
      break;

    default:
      if (this.left) this.left.depthFirstForEach(cb, type);
      cb(this.value);
      if (this.right) this.right.depthFirstForEach(cb, type);
      break;
  }
};
// [ D, E, F, G ]
BinarySearchTree.prototype.breadthFirstForEach = function (cb, queue) {
  if (!queue) {
    var queue = [];
  }

  // ejecuto la cb
  cb(this.value); // D

  // guardo mis hijos en la queue
  if (this.left) queue.push(this.left);
  if (this.right) queue.push(this.right);

  if (queue.length > 0) {
    queue.shift().breadthFirstForEach(cb, queue);
  }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
