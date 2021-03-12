
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  if (matrix == 0) {
    return newArr;
  }
  
  for (let i = 0; i < matrix.length; i++) {
    newArr = (newArr.concat(matrix[i])).sort();
  }

  return newArr;
}



