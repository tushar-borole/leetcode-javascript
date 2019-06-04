var search = function(nums, target, start = 0, end = nums.length - 1) {
  let mid = Math.floor(end + start / 2);
  if (nums[mid] === target) {
    return mid;
  }

  if (target < nums[mid]) {
    return search(nums, target, start, mid - 1);
  } else if (target > nums[mid]) {
    return search(nums, target, mid + 1, end);
  }
};

search([1, 2, 3, 4, 5], 5); //?
