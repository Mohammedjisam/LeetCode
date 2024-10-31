/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    let newArr=[];
    for(let i=0;i<mountain.length;i++){
        if(mountain[i]>mountain[i-1]&&mountain[i]>mountain[i+1]){
            if(mountain[i]!==mountain[0]||mountain[i]!==mountain[mountain.length-1]){
                newArr.push(i);
            }
        }
    }return newArr
};