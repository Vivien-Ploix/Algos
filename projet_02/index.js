let fs = require('fs');
//Méthode asynchrone
fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return ;
    }
    let parsedData = data.split(' ').map(function(v){return +v})
    let mergeArray = mergeSort([...parsedData])
    console.log("........................")
    console.log(`MegreSort: ${comparisons} comparaisons :`)
    console.log(mergeArray);
    console.log("........................")
    
    let combArray = combSort([...parsedData])
    console.log(combArray)
    console.log("........................")

    let shellArray = shellSort([...parsedData])
    console.log(shellArray)
    console.log("........................")
});



// Merge Sort 



let comparisons = 0;
// Merge Sort Implentation (Recursion)
const mergeSort = (unsortedArray) => {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}



// Merge the two arrays: left and right
const merge = (left, right) => {
  let resultArray = [], leftIndex = 0, rightIndex = 0;
  

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
      comparisons++;

    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}


// Comb Sort 



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
  console.log(`CombSort: ${comparisons} comparaisons :`)
  return array;
};



// Shell Sort


const shellSort = (array) => {
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
  console.log(`ShellSort: ${comparisons} comparaisons :`)
  return array
}
