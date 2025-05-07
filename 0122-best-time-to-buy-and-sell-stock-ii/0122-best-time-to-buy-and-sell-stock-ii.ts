function maxProfit(prices: number[]): number {
    let min:number=prices[0];
    let profit:number=0;
    let i:number=0;
    let j:number=1;
    while(i<prices.length && j<prices.length){
        if(prices[i]<prices[j]){
            profit+=prices[j]-prices[i]
        }
        i++;
        j++
    }
    return profit
};