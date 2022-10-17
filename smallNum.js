/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
   let count=0
   let result=[]
    
    for (i=0;i<nums.length;i++)
        {
        
            for (j=0; j<nums.length;j++)
                {
                    
                    if(nums[i] > nums[j])
                        count++;
                        
                }
            result.push(count)
            count=0;
        }
    return result
};
