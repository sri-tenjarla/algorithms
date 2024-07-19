console.log("Binary Search");
let arr = [-1, 0, 3, 5, 9, 12];
let target = 9;
console.log(search(arr));

function search(nums) {
  let left = 0;
  let right = nums.length - 1;
  console.log("left, right - " + left, right);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log("calculated mid - " + mid);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
