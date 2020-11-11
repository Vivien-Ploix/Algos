let fs = require('fs');
//Méthode asynchrone
fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return ;
    }
    let parsedData = data.split(' ').map(function(v){return +v})
    let parsedArray = selectionSort(parsedData)
    console.log(parsedArray); //Le contenu du fichier est présent dans data
});

const selectionSort = (array) => {
  n = array.length;
  var comparisons = 0;
  for (i=0; i <= n-2; i++) {
    min = i;
    for (j=i+1; j <= n-1; j++) {
      comparisons++;
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) { 
      tmp = array[i]
      array[i] = array[min]
      array[min] = tmp
    }
  }
  console.log(comparisons)
  return array
}