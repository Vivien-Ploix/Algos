
const howManyHaveView = (array) => {
  let number = 0;
  for (i=0; i<array.length; i++) {
    let slicedArray = array.slice(i)
    if (array[i] === Math.max(...slicedArray)) { number++ }
  }
  return number
}

console.log(howManyHaveView([1, 4, 5, 8, 5, 6, 7]) + " bâtiments ont la vue sur l'Ouest")