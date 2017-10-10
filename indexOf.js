let IndexOff = (array, value) => { //1ый способ
  let index;

  array.forEach((item, i, arr) => {
    if (arr[i] === value) index = i;
  });

  if (index !== undefined) {
    return index;
  } else {
    return -1
  }
};

// let IndexOff = (array, value) => {  //2ой способ
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === value) return i;
//   }

//   return -1;
// };

console.log(IndexOff([1, 2, 3], 2));