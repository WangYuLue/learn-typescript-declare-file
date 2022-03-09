Array.prototype.getSum = function () {
  return this.reduce((result, value) => result + value, 0);
}