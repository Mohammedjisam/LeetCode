
/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    let tested = 0
    for(let i=0; i<batteryPercentages.length; i++){
        let val = batteryPercentages[i] - tested
        if(val > 0){
            tested++
        }
    }
    return tested
};
