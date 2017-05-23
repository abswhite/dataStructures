'use strict';

function isPalindrome(string) {
  let length = string.length
  let array = [];
  *splice into array

  let last = length-1;
  let first = 0;

  for (var i = 0; i < (last/2); i++) {

    if(array[first] != array[last]) {
      return false;
    } else {
      last --;
      first ++;
    }
    return true;
  };
};
