"use strict"

function uniq(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if ( newArr.indexOf(arr[i]) === -1 ){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log( uniq([1, 4, 2, 2, 3, 4, 8]) );