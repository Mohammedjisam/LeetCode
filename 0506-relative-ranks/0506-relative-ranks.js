/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let arraySorted=[...score].sort((a,b)=>b-a)
    let rankMap= new Map();
    arraySorted.forEach((val,index)=>{
        if(index===0){
            rankMap.set(val,"Gold Medal")
        }else if(index===1){
            rankMap.set(val,"Silver Medal");
        }else if(index===2){
            rankMap.set(val,"Bronze Medal")
        }else{
            rankMap.set(val,(index+1).toString());
        }
    });
    return score.map(val=>rankMap.get(val))
};