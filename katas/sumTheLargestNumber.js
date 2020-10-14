const sumLargestNumbers = function (data) {
  for (let value of data) {
    if (data[0] > data[1]) {
      return data[0] += data[1];
    } else {
      return data[1] += data[0];
    }
  }
}

console.log(sumLargestNumbers([1, 10]));