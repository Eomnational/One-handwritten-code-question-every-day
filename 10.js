

function getResult(weight) {
    let minCount = Infinity;
    for (let i = Math.floor(weight / 7); i >= 0; i--) {
        let rest1 = weight - i * 7;
        for (let j = Math.floor(rest1 / 3); j >= 0; j--) {
            let rest2 = rest1 - j * 3;
            if (rest2 % 2 === 0) {
                let k = rest2 / 2;
                let count = i + j + k;
                minCount = Math.min(minCount, count);
            }
        }
    }

    return minCount === Infinity ? -1 : minCount; 
}



const weight=100;
console.log(getResult(weight));