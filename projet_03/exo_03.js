
const doesSumExists = (array, k) => {
  let isSum = false;
  for (i = 0; i < array.length-1; i++) {
    let x = k - array[i]
    if (array.includes(x)) {isSum = true}
  }
  if (isSum === false) { return ` ${isSum} : Il n'existe pas 2 chiffres dans l'array dont la somme est le nombre demandé`}
  else { return `${isSum} : Il existe au moins 2 chiffres dans l'array dont la somme est le nombre demandé`}
}

console.log(doesSumExists([10, 15, 3, 7], 17))