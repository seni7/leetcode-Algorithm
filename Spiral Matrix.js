// O(N) Time, O(N) Space for storing the result array
var spiralOrder = function(matrix) {
	// check for an edge
	// matrix is empty
    let result = [];
    if(matrix.length === 0)
        return result;
    
    let startRow = 0;
    let endRow = matrix.length - 1;
    let startCol = 0;
    let endingCol = matrix[0];
    let endCol = endingCol.length - 1;
    
    while(startRow <= endRow && startCol <= endCol){
        for(let col = startCol; col <= endCol; col++){
            result.push(matrix[startRow][col]);
        }
        for(let row = startRow + 1; row <= endRow; row++){
            result.push(matrix[row][endCol]);
        }
        for(let col = endCol - 1; col >= startCol; col--){
           // edge case : test case [[1,2,3,4],[10,11,12,13],[9,8,7,6]]
		   if(startRow == endRow){
                break;
            }
            result.push(matrix[endRow][col]);
        }
        for(let row = endRow - 1; row > startRow; row--){
           // edge case: test case [[1,2,3],[12,13,4],[11,14,5],[10,15,6],[9,8,7]]
		   if(startCol == endCol){
                break;
            }
            result.push(matrix[row][startCol]);
        }
        startRow += 1;
        endRow -= 1;
        startCol += 1;
        endCol -= 1;
    } 
    return result;
};
