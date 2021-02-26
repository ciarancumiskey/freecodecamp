//diff combines 2 separate arrays
const diff = (arr1, arr2) => [
  //The filter function checks if an element of 1 array is present in the other
  ...arr1.filter(e=> !arr2.includes(e)),
  ...arr2.filter(e=> !arr1.includes(e))
];

//Using a Set instead of a List/Array removes any duplicate elements
const sym = (...args) => [...new Set(args.reduce(diff))];

sym([1, 2, 3], [5, 2, 1, 4]);