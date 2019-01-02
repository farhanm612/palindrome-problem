const input = 'aeeyeey';

function makePalindrome(input) {
    const charCounts = {};

    for (const c of input) {
        charCounts[c] = (charCounts[c] || 0) + 1
    }

    const oddCounts = Object.values(charCounts)
        .filter(count => count % 2 === 1);
    if (oddCounts.length > 1) return -1;

    let cost = 0;
    for (const currentIndex = 0; currentIndex < input.length / 2; currentIndex++) {
        const oppositeIndex = input.length - 1 - currentIndex;

        const currentChar = input[currentIndex];
        const oppositeChar = input[oppositeIndex];

        if (currentChar !== oppositeChar) {
            let leftIndex = Infinity;
            let rightIndex = -Infinity;

            for (const i = currentIndex + 1; i < oppositeIndex; i++) {
                if (input[i] === oppositeChar) {
                    leftIndex = i;
                    break;
                }
            }

            for (const i = oppositeIndex - 1; i > currentIndex; i--) {
                if (input[i] === currentChar) {
                    rightIndex = i;
                    break;
                }
            }
        }
    }
}

console.log(makePalindrome(input));