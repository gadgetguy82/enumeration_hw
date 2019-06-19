const IsogramFinder = function (word) {
  this.word = word.toLowerCase().split('');
}

IsogramFinder.prototype.isIsogram = function () {
  const unique = (value, index, array) => {
    return array.indexOf(value) === index;
  }
  const uniqueArray = this.word.filter(unique);
  return uniqueArray.join('') === this.word.join('');
}

module.exports = IsogramFinder;
