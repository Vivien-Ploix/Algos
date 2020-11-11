let fs = require('fs');
//Méthode asynchrone
fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return ;
    }
    let parsedData = data.split(' ').map(function(v){return +v})
    console.log("........................")
    let bubbleArray = bubbleSort([...parsedData])
    console.log(bubbleArray);
    console.log("........................")

    let insertionArray = insertionSort([...parsedData])
    console.log(insertionArray)
    console.log("........................")

    let selectionArray = selectionSort([...parsedData])
    console.log(selectionArray)
    console.log("........................")

    let quickArray = quickSort([...parsedData])
    console.log(`QuickSort: ${comparisons} comparaisons :`)
    console.log(quickArray)
    console.log("........................")
});


// Bubble Sort


const bubbleSort = (array) => {
  var comparisons = 0;
  for(let i = 0; i < array.length-1; i++) {
    for(let j = 0; j < array.length- 1-i; j++ ) {
    comparisons++;
      if (array[j+1] < array[j]) {
        swap(array, j+1, j)
      }
    }
  }
  console.log(`BubbleSort: ${comparisons} comparaisons :`)
  return array
}

const swap = (array, i, j) => {
  var aux = array[i];
  array[i] = array[j];
  array[j] = aux;
}



// Insertion Sort 

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
  console.log(`InsertionSort: ${comparisons} comparaisons :`)
  return array
}




// Selection Sort 

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
  console.log(`SelectionSort: ${comparisons} comparaisons :`)
  return array
}

// Quick Sort


let comparisons = 0;

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  
  var left = []; 
  var right = [];

  for (var i = 1; i < array.length; i++) {
    comparisons++;
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
};
