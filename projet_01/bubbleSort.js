let fs = require('fs');
//Méthode asynchrone
fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return ;
    }
    let parsedData = data.split(' ').map(function(v){return +v})
    let parsedArray = bubbleSort(parsedData)
    console.log(parsedArray); //Le contenu du fichier est présent dans data
});


const bubbleSort = (array) => {
  var comparisons = 0;
  for(let i = 0; i < array.length - 1; i ++) {
    for(let j = 0; j < array.length - 1 - i; j ++ ) {
    comparisons++;
      if (array[j+1] < array[j]) {
        swap(array, j+1, j)
      }
    }
  }
  console.log(comparisons)
  return array
}

const swap = (array, i, j) => {
  var aux = array[i];
  array[i] = array[j];
  array[j] = aux;
}

