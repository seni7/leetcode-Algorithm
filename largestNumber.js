var largestNumber = function(nums) {
   const sorted= nums.sort((a,b)=>{
        
        const ab= a.toString()+b.toString()
        const ba= b.toString()+a.toString();
        return ba-ab;
    })
         const join=sorted.join('')
         if( parseInt(join) === 0 )
             {
                 return '0';
             }
         else
             {
                 return join;
             }
    };
