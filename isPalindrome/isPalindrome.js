'use strict';

function isPalindrome(string) {
  let length = string.length
  let array = [];
  // splice string into array

  let last = length-1;
  let first = 0;

  for (var i = 0; i < (length/2); i++) {

    if(array[first] != array[last]) {
      return false;
    } else {
      last --;
      first ++;
    }
    return true;
  };
};
