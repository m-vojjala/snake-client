const numberOfVowels = function (data) {
  let vowelStr = "";
  for (let value of data) {
    if (value === 'a' || value === 'e' || value === 'i' || value === 'o' || value === 'u') {
      vowelStr += data.charAt(value);
    }
  }
  return vowelStr.length;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));