/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
     nums.sort((a,b)=>{return (a-b)})
     return(nums[nums.length-k])
};
