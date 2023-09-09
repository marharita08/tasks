function deepEqual(val1: any, val2: any): boolean {
    // якщо обидві вхідні змінні є примітивами порівнємо їх за допомогою '==='
    if (isPrimitive(val1) && isPrimitive(val2)) {
        return val1 === val2;
    }
    // якщо одна із вхідних змінних є примітивом, а інша ні - повертаємо false
    if (isPrimitive(val1) || isPrimitive(val2)) {
        return false;
    }
    // якщо попередні return не спрацювали, отже обидві змінні є об'єктами
    // якщо обидва посилання посилаються на один і той самий об'єкт - повертаємо true
    if (val1 === val2) {
        return true;
    }
    // порівнюємо кількість властивастей об'єктів, якщо вона різна - повертаємо false
    if (Object.keys(val1).length !== Object.keys(val2).length) {
        return false;
    }
    // перебираємо ключі першого об'єкта
    for (let key in val1) {
        // якщо другий об'єкт не містить такого ключа - повертаємо false
        if (!(val2.hasOwnProperty(key))) {
            return false;
        }
        // викликаємо deepEqual щоб порівняти властивість об'єктів за поточним ключем
        // якщо властивості різні - повертаємо false
        if (!deepEqual(val1[key], val2[key])) {
            return false;
        }
    }
    return true;
}

function isPrimitive(val: any): boolean {
    // перевіряємо чи задана змінна є примітивом
    return (val !== Object(val));
}

console.log(deepEqual({name: 'test'}, {name: 'test'}));
console.log(deepEqual({name: 'test'}, {name: 'test1'}) );
console.log(deepEqual({name: 'test', data: {value: 1}}, {name: 'test', data: {value: 2}}) );
console.log(deepEqual({name: 'test'}, {name: 'test', age: 10}));
