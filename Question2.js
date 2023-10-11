// 2) Given an array of strings strs, group the anagrams together. You can return the answer in
// any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:



function GroupAnagram(strs) {
    const obj = {};
    for (let word of strs) {
        const Sortwords = word.split('').sort().join('');
        // console.log(words);
        if (obj[Sortwords]) {
            obj[Sortwords].push(word);
        } else {
            obj[Sortwords] = [word];
        }
    }
    return Object.values(obj);
}

console.log(GroupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]))