// 5) Given a array of non-negative integers nums, Find the Kth largest element in the array
// Note - Do not use any sorting algorithm or library's sort method
// Example-1:
// Input: nums = [10,4,12,9,87,34], K = 2
// Output: 34

function KthElemnt(nums, k) {
    for (let i = 0; i <= nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums[nums.length - k];
}

let nums = [10, 4, 12, 9, 87, 34];
let k = 2;
let x = KthElemnt(nums, k);
console.log(x)