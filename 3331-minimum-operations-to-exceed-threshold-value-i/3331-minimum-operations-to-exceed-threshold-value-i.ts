function minOperations(nums: number[], k: number): number {
    nums.sort((a,b)=>a-b)
    let operations:number=0;
    for(let num of nums){
        if(num>=k) break;
        operations++;
    }
    return operations
};