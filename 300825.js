var reduce = function(nums, fn, init) {
    let acc = 0;
    let ans = 0;
    for(var i = 0; i<nums.length; i++){
        ans += fn(acc, nums[i]);
        acc = ans;
    }
    return ans;
};

let nums = [1,2,3,4];
let fn = function sum(accum, curr) { return accum + curr * curr; }