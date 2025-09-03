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

let ans = (function abcd(){
    let variable = 12;
    return{
        Set: function(val){
            variable = val;
        },
        get: function() {
            console.log(variable);
        }
    };
})();
ans.Set(38);
ans.get();