/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let subarrayCount = 0
        for(let i = 0; i < nums.length; i++){
            nums.slice(0,i + 1)//?
            nums.slice(i+1,nums.length)//?
            let sum = nums.slice(0,i + 1).reduce((a,b) => a+b) + nums.slice(i+1,nums.length).reduce((a,b) => a+b)

            if(sum === k){
                subarrayCount++
            }
        }


    return subarrayCount
};

subarraySum([1,1,1],2)//?
