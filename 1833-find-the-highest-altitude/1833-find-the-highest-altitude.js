/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let alt=[0]
    let sum=0;
    for(let i=0;i<gain.length;i++){
       
        sum=sum+gain[i]
         alt.push(sum)
    }
    return Math.max(...alt)
};