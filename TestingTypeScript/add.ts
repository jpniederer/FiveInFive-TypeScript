function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function binarySearch(nums: number[], n: number): boolean {
  let start = 0;
  let end = nums.length - 1;
  let mid = (end + start) / 2;

  while (start <= end) {
    if (nums[mid] > n) {
      end = mid - 1;
    } else if (nums[mid] < n) {
      start = mid + 1;
    } else {
      return true;
    }

    mid = (start + end) / 2;
  }

  return false;
}

export { add, subtract, binarySearch };