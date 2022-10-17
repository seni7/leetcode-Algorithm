/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const res=[]
    const minH = new MinPriorityQueue()
    points.forEach(p=>
    {
        const distanceFromOrign = Math.sqrt(p[0] * p[0] + p[1] * p[1])
        minH.enqueue(p,distanceFromOrign)
    })
    while(res.length < k)res.push(minH.dequeue().element)
    return res;
    
};
