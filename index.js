const input = 'eeyeey';

function makePalindrome(input) {
    const charCounts = {};

    for (const c of input) {
        charCounts[c] = (charCounts[c] || 0) + 1
    }

    const oddCounts = Object.values(charCounts)
        .filter(count => count % 2 === 1);
    if (oddCounts.length > 1) return -1;
}

console.log(makePalindrome(input));