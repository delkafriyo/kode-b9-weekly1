function palindromCheck(word) {
  let lowWord = word.toLowerCase();
  let reverseWord = lowWord.split("").reverse().join("");
  return word === reverseWord;
}

console.log(palindromCheck("kasur ini rusak"));
