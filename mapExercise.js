//multiply the numbers in nums1 with nums2
const nums1 = [1, 2, 3, 4, 5];
const nums2 = [6, 7, 8, 9, 0];
const multipliedNumbers = nums1.map((num, i) => num * nums2[i]);
console.log(multipliedNumbers);