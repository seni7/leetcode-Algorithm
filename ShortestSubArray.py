class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        
        # Pre-Computation for range sum queries
        prefixSum = [nums[0]]
        
        for index in range(1,len(nums)):
            prefixSum.append(prefixSum[index-1] + nums[index])
            
        q = deque([])
        minLen = sys.maxsize
        
        for windowEnd in range(len(nums)):
            y = windowEnd
            
            if prefixSum[windowEnd] >= k:
                minLen = min(minLen,windowEnd - 0 + 1)
                
            # => prefix[y] - prefix[x] >= k
            # => prefix[y] - k >= prefix[x]
            # => prefix[x] <= prefix[y] - k (⭐)
            # => prefix[x] <= threshold
            
            threshold = prefixSum[y] - k
            
            # We will go through the queue and 
            # consider length of every prefix[x] <= threshold
            
            # We will simultaneously pop that element after considering 
            # for reason 1 in video,
            # for a particular x if there is Y1 & Y2, 
            # then x is only useful for the nearest Y, 
            # in other cases it will always have greater length 
            # and we want minimum, therefore pop it now only.
            
            while q and prefixSum[q[0]] <= threshold:
                # In this case: 
                #     windowEnd - windowStart + 1 ❌
                #     windowEnd - windowStart     ✔️
                # > Why?
                # Recall that prefix[y]-prefix[x] is sum of array from x+1->y
                # NOT from x->y, for that reason the particular prefix's
                # satisfying equations are from x+1 to y, which means we 
                # dont need to add one element since already it is one less
                minLen = min(minLen, windowEnd - q.popleft())
                
            # To maintain the monotonic queue we need to remove suboptimal results
            # > recall " prefix[x] <= threshold "
            # consider x1, x2 for a Y, where x1 comes before x2
            # AND prefix[x1] > prefix[x2]
            # Now since we are finding ANY prefix inside threshold, 
            # both can be considered in next iteration BUT which one is more optimal?
            # There are 3 cases. 
            # - prefix[x2] < prefix[x1] < Threshold
            # - prefix[x2] < Threshold < prefix[x1] 
            # - Threshold < prefix[x2] < prefix[x1]
            # If both are considered, ALWAYS prefix[x2] will be selected, WHY?
            # Simply because it is near and will form smaller subarray.
            # And by listing these cases we can safely say that 
            # ' prefix[x1] will never be chosen over prefix[x2] '
            # and we can kick out prefix[x1] without any hesitation.
            # The x2 we considered in the example above is actually 'y' in this specific
            # iteration, since in next iterations, this 'y' index will become an 'x'
            
            while q and prefixSum[q[-1]] >= prefixSum[y]:
                q.pop()
               
            q.append(windowEnd)
            
        return minLen if minLen != sys.maxsize else -1
