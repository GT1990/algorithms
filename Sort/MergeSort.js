function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right]; // if there is an item left in arrLeft or arrRight add that to the end of the array.
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  // splits array in half calling merge on each half
  const half = Math.floor(arr.length / 2);
  const left = arr.splice(0, half);
  return merge(mergeSort(left), mergeSort(arr));
}
// array that needs to be sorted
const arrayToBeSorted = [9, 4, 2, 1, 0, 3, 5, 6, 8, 7];

console.log(mergeSort(arrayToBeSorted));
