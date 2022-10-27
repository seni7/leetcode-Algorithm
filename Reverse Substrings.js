/**
 * @param {string} s
 * @return {string}
 */
function reverse(A,l,h)
{
    if (l < h)
    {
      let ch = A[l];
      A[l] = A[h];
      A[h] = ch;
      reverse(A, l + 1, h - 1);
    }
}
var reverseParentheses = function(s) {

    let rev= [];
    
    for(let i=0; i<s.length; i++)
        {
            if(s[i] =="(" )
                {
                    rev.push(i)
                   // const ans=[i]
                   // console.log(ans)
                }
             else if (s[i] == ')')
            {
           
                  let A = [...s]
                  reverse(A, rev[rev.length-1] + 1, i);
                  s = [...A];
                  rev.pop();
      }
    }

        
    // return ( reverse.join(''))
      let res = "";
    for (let i = 0; i < s.length; i++)
    {
      if (s[i] != ')' && s[i] != '(')
      {
        res += (s[i]);
      }
    }
    return res;
 
};
