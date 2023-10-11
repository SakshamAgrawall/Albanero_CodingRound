// 3) Given a string s and a array of strings wordArray, return true if s can be segmented into a
// space-separated sequence of one or more array words.
// Note that the same word in the array may be reused multiple times in the segmentation.
// Example 1:
// Input: s = "leetcode", wordArray = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:
// Input: s = "applepenapple", wordArray = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:
// Input: s = "catsandog", wordArray = ["cats","dog","sand","and","cat"]
// Output: false



function WordSpearte(s, wordArray) {
    let word = new Set(wordArray);
    let x = Array(s.length + 1).fill(false);
    x[0] = true;
    for (let i = 1; i < s.length + 1; i++) {
        for (let j = 0; j < i; j++) {
            if (x[j] === true && word.has(s.substring(j, i))) {
                x[i] = true;
            }
        }
    }
    return x[s.length];
}


let s = "applepenapple";
let wordArray = ["apple", "pen"];

x = WordSpearte(s, wordArray);

console.log(x)




