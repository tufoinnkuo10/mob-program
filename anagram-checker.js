module.exports = function (string1, string2) {
  let word1 = string1
  .replace(/[\W_]+/g, "")
  .toLowerCase()
  .split("")
  .sort()
  .join("");



  let word2 = string2
  .replace(/[\W_]+/g, "")
  .toLowerCase()
  .split("")
  .sort()
  .join("");

  return word1 == word2;
}
