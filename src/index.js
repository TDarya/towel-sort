
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  for (var i=0; i < matrix.length; i++) {
    if (i % 2 != 0 && matrix[i].length > 0) {
        matrix[i] = matrix[i].reverse();
      }
  }

  return matrix.flat(Infinity);
}
