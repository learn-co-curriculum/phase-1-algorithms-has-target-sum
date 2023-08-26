function hasTargetSum(array, target) {
  // Write your algorithm here
  /*
    i expect calling the function hasTargetSum with an array  and a target .This function should return true if the sum of two numbers from that array is equal two the target and return false if there was no pair of numbers that their sum is equal to the target
  */

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Given an input array of n elements, for the time complexity of this algorithm ,the inner loop performs n iterations for every iteration of the outer loop, in the end we get O(n²) (quadratic) .
  in terms of space complexity the amount of memory needed increase or decrease based on the size of the array we passed as an input and since we didn't need to create any sort of data structures to sore data we get O(n)
*/

/* 
  Add your pseudocode here
   loop through each number in the array
    for the current number ,loop through the rest of the numbers in the array 
   if the sum of the current number and  one of the remaining numbers from  the array is equal to the second argument(target) 
   return true
   else 
   if we reached the final number of the array and the condition didn't get passed return false

*/

/*
  Add written explanation of your solution here
  the function hasTargetSum  has two parameters, an array and a target ,first we iterate over the whole array and then we do a another loop inside the first loop(nested loop) to check the rest of the element summation with the current element and if we find that the summation is equal to the target the function should return true and if we don't it should return false of course after we iterate over the whole items in the array
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([15, 2, 11, 1, 3, 5], 21));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([4, 16, 2, 9, 22, 8], 6));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 5, 12, 14, 11, 27], 32));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
