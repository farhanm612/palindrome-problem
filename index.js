function makePalindrome(input) {
    function move(from, to) {
        if (from < to) {
            input =
                input.substring(0, from) +
                input.substring(from + 1, to + 1) +
                input[from] +
                input.substring(to + 2);
        } else if (from > to) {
            input =
                input.substring(0, to) +
                input[from] +
                input.substring(to, from) +
                input.substring(from + 1);
        }
    }

    const charCounts = {};

    for (const c of input) {
        charCounts[c] = (charCounts[c] || 0) + 1
    }

    const oddCounts = Object.values(charCounts)
        .filter(count => count % 2 === 1);
    if (oddCounts.length > 1) return -1;

    let cost = 0;
    for (let currentIndex = 0; currentIndex < input.length / 2; currentIndex++) {
        const oppositeIndex = input.length - 1 - currentIndex;

        const currentChar = input[currentIndex];
        const oppositeChar = input[oppositeIndex];

        if (currentChar !== oppositeChar) {
            let leftIndex = Infinity;
            let rightIndex = -Infinity;

            for (let i = currentIndex + 1; i < oppositeIndex; i++) {
                if (input[i] === oppositeChar) {
                    leftIndex = i;
                    break;
                }
            }

            for (let i = oppositeIndex - 1; i > currentIndex; i--) {
                if (input[i] === currentChar) {
                    rightIndex = i;
                    break;
                }
            }

            const leftDistance = leftIndex - currentIndex;
            const rightDistance = oppositeIndex - rightIndex;

            cost = cost + Math.min(leftDistance, rightDistance);

            if (leftDistance < rightDistance) move(leftIndex, currentIndex);
            else move(rightIndex, oppositeIndex);
        }
    }

    return cost;
}

const input = 'yee';
console.log(makePalindrome(input));