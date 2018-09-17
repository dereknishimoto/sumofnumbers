const testNums = [4, 10, 25, 36];

function sumFor(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
  }
  return count;
}

function sumWhile(nums) {
  let count = 0;
  let i = 0;
  while (i < nums.length) {
    count += nums[i];
    i++;
  }
  return count;
}

function recurse(nums, i, count) {
  if (nums[i] == null) {
    return count;
  }
  const newCount = count + nums[i];
  const index = i + 1;
  return recurse(nums, index, newCount);
}

function sumRecursion(nums) {
  return recurse(nums, 0, 0);
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function(memo, num){ return memo + num; }, 0);
}

console.log(sumFor(testNums));
console.log(sumWhile(testNums));
console.log(sumRecursion(testNums));
console.log(sumTheSimpleWay(testNums));
