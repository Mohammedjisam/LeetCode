function multiply(num1: string, num2: string): string {
    let nums1=BigInt(num1)
    let nums2=BigInt(num2)
    let sum=nums1*nums2

    let sums=sum.toString()
    return sums
};