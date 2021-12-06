// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	//for loop
	//in loop

	//PRODUCEST FASTEST OUTPUT
	// for (let i = 0; i < nums.length; i++) {
	// 	for (let j = i + 1; j < nums.length; j++) {
	// 		if (nums[i] + nums[j] === target) {
	// 			// return [nums[i, j]];
	// 			return [i, j];
	// 		}
	// 	}
	// }

	//LESS MEMORY BUT SLOWER
	for (let i = 0; i < nums.length; i++) {
		const addendIndex = nums.indexOf(target - nums[i], i + 1);
		if (addendIndex > -1) {
			return [i, addendIndex];
		}
	}
};

// const nums = [2, 11, 7, 15],
// 	target = 9;
const nums = [2, 5, 5, 11],
	target = 10;

const response = twoSum(nums, target);

console.log('response:', response);
