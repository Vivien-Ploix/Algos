

const howManyHaveView = (array) => {
  let number = 1;
  for (i=0; i<array.length-1; i++) {
    let isHigher = true;
    for(j=i+1; j<array.length; j++) {
      if (array[i] < array[j]) {
        isHigher = false;
      }
    }
    if (isHigher) {number++} 
  }
  return number
}

console.log(howManyHaveView([1, 4, 5, 8]) + " bâtiments ont la vue sur l'Ouest")