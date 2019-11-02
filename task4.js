/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 141. 环形链表
 */
// var hasCycle = function(head) {
//     while(head!==null){
//         if(head.val=='flag'){
//             return true;
//         } else {
//             head.val = 'flag';
//             head = head.next;
//         }
//     }
//     return false;
// };

/**
 * @param {number[]} nums
 * @return {number}
 * 26.删除排序数组中的重复项
 */
// var removeDuplicates = function(nums) {
//     let length = nums.length;
//     let res = 1;
    
//     for(let i = 1; i < length; i++){
//         if(nums[i]!=nums[i-1]){
//            nums[res++] = nums[i];
//         }
//     }

//     return res;
// }; 

/**
 * @param {string[]} strs
 * @return {string}
 * 最长公共前缀
 */
// var longestCommonPrefix = function(strs) {
//     if(strs.length < 1) return '';

//     let res = [];
//     let len = strs[0].length;

//     for(let i = 0; i < len; i++){
//         let fn = (key)=>{
//             return key[i] == strs[0][i];
//         }
//         if(strs.every(fn)){
//             res.push(strs[0][i]);
//         } else {
//             break;
//         }
//     }
    
//     return res.join('');
// };

// console.log(longestCommonPrefix(["ower","ow","light"]))

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//     let p = m-- + n-- - 1;
//        while (m >= 0 && n >= 0) {
//            nums1[p--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
//        }
       
//        while (n >= 0) {
//            nums1[p--] = nums2[n--];
//        }
// };

/**
 * @param {string} s
 * @return {string}
 * 最长回文字符
 */
var longestPalindrome = function(s) {

    if (!s || !s.trim()) return '';
    if (s.length === 1) return s;
    if (s.length === 2) return s[0] === s[1] ? s[0] + s[1] : s[1];
    let result = '';

    /**
    *扩散坐标
    */
    var calPalindromeIndex = function(left,right,s){
        let len = s.length;
        while(left>=0&&right<len&&s[left] == s[right]){
            left--;
            right++;
        }
        return {left:left+1,right:right}
    }


    for(let i = 0,len = s.length;i<len;i++){
        let even = '';
        let odd = '';
        if(s[i] == s[i+1]){
            //经过当前位与下一位判断已构成回文，扩散位直接从下一位开始，可以提速
            let evenIndex = calPalindromeIndex(i-1,i+2,s);
            even = s.slice(evenIndex.left,evenIndex.right);
        }

        let oddIndex = calPalindromeIndex(i-1,i+1,s);
        odd = s.slice(oddIndex.left,oddIndex.right);
        
        let re = odd.length>even.length?odd:even;
        result = result.length>re.length?result:re;
    }
    return result;
};