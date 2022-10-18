var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let max=0;
    let l=0,r = nums.length-1;
     while(l < r)
        {
            max=Math.max(max,nums[l]+nums[r])
            
            l++
            r--
        }
    return max;
};
