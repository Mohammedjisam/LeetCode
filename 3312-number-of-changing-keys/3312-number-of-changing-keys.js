/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let count=-1;
    let Snew=s.toLowerCase();
    console.log(Snew)
    for(let i=0;i<s.length;i++){
        if(Snew[i]!==Snew[i+1]){
            count++;
        }
    }
 return count;
    
};