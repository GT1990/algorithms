const array = [9, 4, 3, 5, 1, 2, 7, 6, 8];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = arr[i];
    let indexOfLowest = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < lowest) {
        lowest = arr[j];
        indexOfLowest = j;
      }
      if (j === arr.length - 1) {
        const temp = arr[i];
        arr[i] = arr[indexOfLowest];
        arr[indexOfLowest] = temp;
      }
    }
  }
  console.log(arr);
}

selectionSort(array);
