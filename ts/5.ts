type Primitive = number | string | boolean | null | undefined | symbol | bigint;

function objectToArray(obj: object): any[] {
    // створюємо масив
    let arr: any[] = [];
    // перебираємо ключі вхідного об'єкта
    for (let key in obj) {
        const value = obj[key];
        if (typeof value === 'object') {
            // якщо значення властивості є об'єктом,додаємо до масиву масив,
            // який містить ключ,та результат виклику objectToArray() для значення властивості
            arr.push([key, objectToArray(value as { [key: string]: Primitive | object })]);
        } else {
            // в іншому випадку додаємо до масиву масив, який містить ключ та занчення властивості
            arr.push([key, value]);
        }
    }
    return arr;
}

console.log(objectToArray({
    name: 'developer',
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5
    }
}))

