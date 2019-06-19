const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const checkAnagram = (word) => {
    return this.word.toLowerCase().split('').sort().join('') === word.toLowerCase().split('').sort().join('')
  };
  return otherWords.filter((word) => {
    return checkAnagram(word) && word !== this.word;
  });
}

module.exports = AnagramFinder;
