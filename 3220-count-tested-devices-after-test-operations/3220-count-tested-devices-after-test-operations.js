/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
   tested=0;
   for(let i=0;i<batteryPercentages.length;i++){
    if(batteryPercentages[i]>0){
        tested++;
        for(let j=i+1;j<batteryPercentages.length;j++){
            batteryPercentages[j]=Math.max(0,batteryPercentages[j]-1)
        }
    }
   }return tested
};