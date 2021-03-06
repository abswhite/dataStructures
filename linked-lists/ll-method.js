'use strict';

const Stack = module.exports = require('./linked-lists');

Stack.prototype.push = function(val) {
  this.insert(val);
  return this;
};

Stack.prototype.pop = function() {
  this.shift();
  return this;
};

Stack.prototype.peek = function() {
  return this.head.val;
};

Stack.prototype.closeBracket = function(string) {

  for(let i = 0; i < string.length; i++) {
    if (string.charAt(i) === '{' || string.charAt(i) === '(' || string.charAt(i) === '[') {
      Stack.prototype.push(string.charAt(i));
    } else if (string.charAt(i) === '}' || string.charAt(i) === ')' || string.charAt(i) === ']') {
      Stack.prototype.pop();
    } else {
      return false;
    }
  }
  return true;
};

Stack.prototype.mixedCharacters = function(string) {

  if (string.length%2 === 0) {
    let stackOne = new Stack();
    let stackTwo = new Stack();
    let stackThree = new Stack();

    for(let i = 0; i < string.length; i++){
      if (string.charAt(i) === '{') stackOne.push(string.charAt(i))
      else if (string.charAt(i) === '}') stackOne.pop()
      else if (string.charAt(i) === '(') stackTwo.push(string.charAt(i))
      else if (string.charAt(i) === ')') stackTwo.pop()
      else if (string.charAt(i) === '[') stackThree.push(string.charAt(i))
      else if (string.charAt(i) === ']') stackThree.pop()
      else return false;
    }
    return true;
  } else {
    throw new Error('Invalid string; odd number of values');
  }
};
