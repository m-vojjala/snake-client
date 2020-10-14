const urlEncode = function (text) {
  for (let char of text) {
    //  console.log(char);
    if (char === " ") {
      text = text.trim().split(" ").join("%20");
      //  console.log(text);
    }
  }
  return text;
}

console.log(urlEncode("Lighthouse Labs"));
