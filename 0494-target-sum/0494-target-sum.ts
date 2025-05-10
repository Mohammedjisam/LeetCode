function findTargetSumWays(nums: number[], target: number): number {
    let prevSeen = new Map();
    if (nums[0] === 0) {
        prevSeen.set(0, 2);
    } else{
        prevSeen.set(nums[0], 1);
        prevSeen.set(-nums[0], 1);
    }

    for (let i = 1; i < nums.length; i += 1) {
        const seen = new Map();

        for (const [prev, amt] of prevSeen) {
            const minus = prev - nums[i];
            seen.set(minus, (seen.get(minus) ?? 0) + amt);

            const plus = prev + nums[i];
            seen.set(plus, (seen.get(plus) ?? 0) + amt);
        };

        prevSeen = seen;
    }

    return prevSeen.get(target) || 0;
};