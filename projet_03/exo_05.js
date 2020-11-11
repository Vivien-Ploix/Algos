const { reverse } = require("dns")

const doesSumExists = (array, k) => {

  let reverseArray = array.map(x => k-x)
  let found = reverseArray.some(x => array.indexOf(x) >= 0)
  return found

}

console.log(doesSumExists([1, 8, 10, 21], 19))
