function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++){
      const complement = target - array[i];
      for (let j = i + 1; j < array.length; j++){
        if(array[j] === complement){
          return true
        }
      }
  }
  return false
}



/* 
  Write the Big O time complexity of your function here

  i think n^2
*/

/* 
  function hasTargetSum takes an array and target
  check that for each number of array, if, when it added to each of the remaining three numbers, it is equal to target 
  if yes, return true
  else return false 
*/

/*
  I will be writing a function hasTargetSum that takes an array and number as arguments. 
  The function will test to see if any two numbers of the array will sum to equal the target value. if so it will return true, else false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 8, 9, 10], 11))

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 8, 7, 5, 2], 2))
}

module.exports = hasTargetSum;
