
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
 if (newArr.length == 0 || arguments == 0) {
    return newArr;
  }
  
  
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      newArr.push(matrix[i]);
    } else {
    	newArr.push(matrix[i].reverse())
    }
    
  }

  newArr = newArr.reduce(function(prev, next) {
    return prev.concat(next);
  });
  
  if (newArr.length == 0 || arguments == 0) {
    return [];
  }


	return newArr;
}



