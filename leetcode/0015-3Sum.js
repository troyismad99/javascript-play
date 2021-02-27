/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 

Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]

Example 2:
    Input: nums = []
    Output: []

Example 3:
    Input: nums = [0]
    Output: []

Constraints:
    0 <= nums.length <= 3000
    -105 <= nums[i] <= 105
*/

function threeSum(nums) {

    // guard against a short input
    if (nums.length < 3) return [];
    
    var result = [];

    // start with a sorted array
    nums.sort(function(a, b) {
        return a - b;
      });

    // we will search all the combinations for each i value
    // -2 : no need to check the last couple
    for (let i = 0; i < nums.length - 2; i++) {
        
        // do not process a duplicate number that we have already porocessed
        if (i > 0 && nums[i] == nums[i - 1]) continue;

        // two pointes at next and last
        var left = i + 1;
		var right = nums.length - 1;

		while (left < right) {

            // check our total
			const sum = nums[i] + nums[left] + nums[right];

			if (sum < 0) { 
                // too low, move left pointer to a larger number
                left += 1;
            }
			else if (sum > 0) {
                // too high, move the right pointer to a smaller number
                right -= 1;
            }
			else {

				// the sum is zero, add to the result
				result.push([nums[i], nums[left], nums[right]]);

				// we don't repeat results so each pointer needs to move over any duplicate values 
				while ((left < right) && (nums[left] == nums[left + 1])) {
                    left += 1;
                }

				while ((left < right) && (nums[right] == nums[right - 1])) {
					right -= 1;
                }

				left += 1;
				right -= 1;
			}
		}
    }
    
    return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([]));
console.log(threeSum([0]));

console.log(threeSum([0,1,-1,4,6,-10, -1, 15, -30, 15]));
console.log(threeSum([0,1,-1,4,6,-10, -1, 15, -30, -1, -1 , 2]));

console.log(threeSum([0,0,0]));
console.log(threeSum([0,-1,1]));

/*
Runtime: 132 ms, faster than 99.10% of JavaScript online submissions for 3Sum.
Memory Usage: 48.7 MB, less than 80.25% of JavaScript online submissions for 3Sum.
*/
