/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
        let obj = {},
    count = 0;

    for (let num of arr) {
      num in obj ? obj[num] += 1 : obj[num] = 1;
    }

    let newArr = Object.values(obj),
    half = arr.length >> 1,
    sum = 0,
    i = 0;

    newArr.sort((a, b) => b - a);

    while (sum < half) {
      sum += newArr[i++];
      count++;
    }

    return count;
    
};
