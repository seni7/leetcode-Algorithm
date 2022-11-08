/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    const fNLength = findNums.length;
    const nLength = nums.length;
    let outPut = [];
    
    
    findNums.forEach(function(i,index){
        const numIndex = nums.indexOf(i);
        let foundAGreater=false;
        for(var it=numIndex+1; it<=nLength; it++){
            if(i<nums[it]){ outPut.push(nums[it]); foundAGreater=true; break;}
        }
        if(!foundAGreater){outPut.push(-1)}
    });
    
    return outPut;
};
