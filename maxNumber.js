/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b)=>{return(a-b)})
    let count=0;
    let left=0;
    let right=nums.length-1
    while(left<right){
        const tempsum=nums[left]+nums[right];
        if(tempsum==k){
            count++;
            left++;
            right--;
        }
    else if(tempsum<k){
        left++
    }
    else{
        right--
    }
}
    return count
};
