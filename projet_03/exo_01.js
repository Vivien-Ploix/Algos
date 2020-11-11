
const doesSumExists = (array, k) => {
  let isSum = false;
  for (i=0; i<array.length-1; i++) {
    for (j=i+1; j<array.length;j++) {
      if (array[i] + array[j] === k) {
        isSum = true;
        return isSum
      }
    }
  }
  if (isSum === false) { return ` ${isSum} : Il n'existe pas 2 chiffres dans l'array dont la somme est le nombre demandé`}
  else { return `${isSum} : Il existe au moins 2 chiffres dans l'array dont la somme est le nombre demandé`}
}

console.log(doesSumExists([1, 8, 10, 21], 19))