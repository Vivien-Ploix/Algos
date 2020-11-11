let number = 0;

const howManyHaveView = (array) => {
  if (array.length === 0) {return number}
  let slicedArray = array.slice(array.lastIndexOf(Math.max(...array)));
  let firstElement = slicedArray.shift() 
  number++;
  howManyHaveView(slicedArray)
  return number
}

console.log(howManyHaveView([1, 4, 5, 8, 5]) + " bâtiments ont la vue sur l'Ouest")