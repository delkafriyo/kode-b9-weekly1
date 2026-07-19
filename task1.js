function palindromCheck(word) {
  let lowWord = word.toLowerCase();
  let reverseWord = lowWord.split("").reverse().join("");
  return word === reverseWord
    ? console.log(`"${word}" is palindrom`)
    : console.log(`"${word}" is not palindrom`);
}

palindromCheck("kasur ini rusak");
