let fs = require('fs');
//Méthode asynchrone
fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return ;
    }
    let parsedData = data.split(' ').map(function(v){return +v})
    let parsedArray = insertionSort(parsedData)
    console.log(parsedArray); //Le contenu du fichier est présent dans data
});


const insertionSort = (array) => {
  n = array.length
  var tmp, i, j;
  var comparisons = 0;
  for (i = 0; i < n; i++){
    tmp = array[i];
    j = i-1;

    while (j >= 0 && array[j] > tmp) {
      array[j+1] = array[j];
      j--;
      comparisons++;
    }
    array[j+1] = tmp;
  }
  console.log(comparisons)
  return array
}


