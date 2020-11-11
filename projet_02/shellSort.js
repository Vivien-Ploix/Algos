let fs = require('fs');
//Méthode asynchrone
fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return ;
    }
    let parsedData = data.split(' ').map(function(v){return +v})
    let parsedArray = shellSort2(parsedData)
    console.log(parsedArray); //Le contenu du fichier est présent dans data
});



const shellSort = (array) => {
    var comparisons = 0;
    var increment = array.length / 2;
    while (increment > 0) {
        for (i = increment; i < array.length; i++) {
            comparisons++;
            var j = i;
            var temp = array[i];
    
            while (j >= increment && array[j-increment] > temp) {
                array[j] = array[j-increment];
                j = j - increment;
            }
    
            array[j] = temp;
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
    console.log(comparisons)
  return array;
}


const shellSort2 = (array) => {
  let n = array.length;
  let comparisons = 0;
  for (let gap = Math.floor(n/2); gap> 0; gap = Math.floor(gap/2)) {
    for (let i = gap; i < n; i+=1) {
      let temp = array[i];
      let j;
      for (j=i; j >= gap && array[j-gap] > temp; j-=gap) {
        comparisons++;
        array[j] = array[j-gap]
      }
      array[j] = temp
    }
  }
  console.log(comparisons)
  return array
}