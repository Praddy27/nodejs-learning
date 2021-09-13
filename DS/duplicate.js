var containsDuplicate = function(nums) {
    let mp = new Map();
    for(let i=0; i < nums.length; i++) {
        //console.log(mp)
        if(mp.has(nums[i])){
            return true;
        } else {
            mp.set(nums[i], 1);
        }
    }
    return false;
};

var arr = [1,2,3,4,1];
console.log(containsDuplicate(arr))