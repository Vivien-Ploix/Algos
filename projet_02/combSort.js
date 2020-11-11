let fs = require('fs');
//Méthode asynchrone
fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return ;
    }
    let parsedData = data.split(' ').map(function(v){return +v})
    let parsedArray = combSort(parsedData)
    console.log(parsedArray); //Le contenu du fichier est présent dans data
});





var combSort = function (array) {
  var interval = Math.floor(array.length/1.3);
  var comparisons = 0;
  while (interval > 0) {
    for(var i=0; i+interval<array.length; i+=1) {
      comparisons++;
      if (array[i] > array[i+interval]) {
        var small = array[i+interval];
        array[i+interval] = array[i];
        array[i] = small;
      }
    }
    interval = Math.floor(interval/1.3);
  }
  console.log(comparisons)

  return array;
};

