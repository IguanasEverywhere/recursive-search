function recursiveSearch(arr, target) {

  // while (arr.length > 0) {
  //   if (arr[0] === target) {
  //     return true
  //   } else {
  //     arr.shift()
  //     recursiveSearch(arr, target)
  //   }
  // }
  // return false


  if (arr.length === 0) {
    return false
  }

  if (arr[0] === target) {
    return true
  } else {
    return recursiveSearch(arr.slice(1), target)
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", recursiveSearch([4, 5], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
