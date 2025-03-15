function findConsecutiveSubstrings(str) {
    if (str.length === 0) return []; // 处理空字符串情况

    let result = [];
    let temp = str[0]; // 初始化当前连续子串

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
            temp += str[i + 1]; // 继续累加相同字符
        } else {
            if (temp.length > 1) {
                result.push(temp); // 记录有效的连续子串
            }
            temp = str[i + 1] || ""; // 避免 str[i + 1] 取到 undefined
        }
    }

    // 处理最后一个连续子串
    if (temp.length > 1) {
        result.push(temp);
    }

    return result;
}

// 测试用例
console.log(findConsecutiveSubstrings("aaabfjbbb")); // ['aaa', 'bbb']
console.log(findConsecutiveSubstrings("abcde"));     // []
console.log(findConsecutiveSubstrings("aabbccddd")); // ['aa', 'bb', 'cc', 'ddd']
console.log(findConsecutiveSubstrings("a"));         // []
console.log(findConsecutiveSubstrings(""));          // []
