/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let len = pushed.length, i = 0, j = 0, s = 0
    while (i < len)
        if (~s && popped[j] === pushed[s]) j++, s--
        else pushed[++s] = pushed[++i]
    return !s
};
