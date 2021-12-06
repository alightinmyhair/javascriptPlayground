// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is palindrome while 123 is not.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	//  convert to string
	let reversedNum = x.toString();

	//  reverse string
	reversedNum = reversedNum.split('').reverse().join('');

	//  convert back to number
	// compare the result to x
	let originalNum = x.toString();

	if (reversedNum === originalNum) {
		return true;
	} else {
		return false;
	}
};

const test1 = isPalindrome(1234);
const test2 = isPalindrome(1221);
const test3 = isPalindrome(1235);
const test4 = isPalindrome(1331);
const test5 = isPalindrome(144341);

console.log('test1: ', test1);
console.log('test2: ', test2);
console.log('test3: ', test3);
console.log('test4: ', test4);
console.log('test5: ', test5);
