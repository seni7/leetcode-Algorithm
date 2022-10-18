class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        count = collections.Counter(nums)
        frequent = count.most_common(k)
        answer = []

        for f in frequent:
            answer.append(f[0])

        return answer
