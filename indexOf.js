if ([].indexOf) { //Кроссбраузерный способ

  var IndexOff = (array, value) => {  //1ый способ
    return array.indexOf(value);
  }

} else {
  var IndexOff = (array, value) => {  //2ой способ
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) return i;
    }

    return -1;
  }
}

console.log(IndexOff([1, 2, 3], 3));