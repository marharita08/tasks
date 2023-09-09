function combos(num: number): number[][] {
    const result: number[][] = [];

    function findCombos(target: number, start: number, currentCombo: number[]): void {
        if (target === 0) {
            result.push([...currentCombo]);
            return;
        }

        for (let i = start; i <= target; i++) {
            currentCombo.push(i);
            findCombos(target - i, i, currentCombo);
            currentCombo.pop();
        }
    }

    findCombos(num, 1, []);

    return result;
}

console.log(combos(3));
console.log(combos(10));
