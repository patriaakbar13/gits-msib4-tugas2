(function ngetik() {
  let txtElement = ["Freelance", "Web Developer", "Graphic Designer"];
  let count = 0;
  let txtIndex = 0;
  let currentTxt = "";
  let words = "";
  if (count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector(".efek-ngetik").textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }
  setTimeout(ngetik, 500);
})();
