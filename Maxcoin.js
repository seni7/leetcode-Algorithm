var maxCoins = function(piles) {
    let res=0; len=(piles.length*(2/3))
piles.sort((a,b)=>b-a)
for (let i = 1; i < len; i+=2) {
     res += piles[i];
    
}
return res
    
};
