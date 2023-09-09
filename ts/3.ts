async function bulkRun(functionsAndArgs: [Function, any[]][]): Promise<any[]> {
    // створюємо масив результатів
    const results: any[] = [];

    // перебираємо кожну функцію з вхідного масиву
    for (const [func, args] of functionsAndArgs) {
        // Створюємо проміс для кожної функції та чекаємо його виконання
        const result = await new Promise<any>((resolve) => {
            // Виконуємо функцію з аргументами та передаємо результат в resolve
            func(...args, (result: any) => {
                resolve(result);
            });
        });
        // додаємо результат до масиву
        results.push(result);
    }
    return results;
}

const f1 = (cb: (result: any) => void) => {
    cb(1);
};

const f2 = (a: number, cb: (result: any) => void) => {
    cb(a);
};

const f3 = (a: number, b: number, cb: (result: any) => void) => {
    setTimeout(() => cb([a, b]), 1000);
};

bulkRun([
    [f1, []],
    [f2, [2]],
    [f3, [3, 4]],
]).then(console.log);