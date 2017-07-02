'use strict';

const Node = require('./lib/list-node');
const SLL = require('./lib/linked-list');

let sll = new SLL();
sll.head = new Node(5);
sll.head.next = new Node(10);
sll.head.next.next = new Node(12);
sll.head.next.next.next = new Node(2);

console.log('original', sll);

let remove = sll.remove(sll, 10);
console.log('remove', remove);

let reverse = sll.reverse();
console.log('reverse', reverse);
