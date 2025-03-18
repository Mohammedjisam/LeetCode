function minimumOperations(nums: number[]): number {
    let opration:number=0;
    for(let num of nums){
       if(num%3!==0){
        opration++
       }
    }return opration
};