// JavaScript Implementation of above approach
function minIncrementForUnique(A)
{
  
    // collect frequency of each element
    let mpp = {};
  
    for(var i of A)
    {
        if(mpp.hasOwnProperty(i))
            mpp[i] = mpp[i] + 1;
        else
            mpp[i] = 1;
    }
  
    // array of unique values taken
    let taken = [];
    let ans = 0;
    for (let x = 0; x < 100000; x++)
    {
        if (mpp.hasOwnProperty(x) && mpp[x] >= 2)
            taken.push([...new Array(mpp[x] - 1).fill(x)]);
        else if(taken.length > 0 &&
                ((mpp.hasOwnProperty(x) &&
                mpp[x] == 0)||!mpp.hasOwnProperty(x)))
        {
            ans += x - taken.pop();
        }
    }
  
    // return answer
    return ans;
}
 
// Driver code
let A = [ 3, 2, 1, 2, 1, 7 ];
console.log(minIncrementForUnique(A));
 
// This code is contributed by phasing17
