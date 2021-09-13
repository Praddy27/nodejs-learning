var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    let indexDiff;
    for(let i in nums){
        //console.log(i)
        console.log(map)
        //determine if index difference is less than or equal to k
        if(map.has(nums[i])) {
           console.log(map.get(nums[i]))
             indexDiff = Math.abs(map.get(nums[i]) - i) 
             if(indexDiff<=k) return true
        }
        
        //set index value of element's most recent appearence
        map.set(nums[i], i)
    }
    //if no duplicate exists or no index diff less than k
    return false
}

console.log(containsNearbyDuplicate([1,2,3,1],3))