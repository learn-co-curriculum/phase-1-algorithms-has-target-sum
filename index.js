function hasTargetSum(array, target) {
  // Write your algorithm here

  for (let i = 0; i < array.length; i++) {
    let difference = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === difference) return true;
    }
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  the function receives an array and a target as arguments.
  If the sum of any 2 element pair ===target, the function returns true.
  Otherwise it returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  //console.log(hasTargetSum([1,2,3,4],5));----true
  // console.log(hasTargetSum([1,2,3,4],1));----false
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
