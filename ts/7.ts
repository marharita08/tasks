function mapObject(obj: object): object {
    return mapObj(obj, "");
}

function mapObj(obj: Record<string, any>, path: string): Record<string, any> {
    // створюємо пустий об'єкт результатів
    let result: Record<string, any> = {};
    // перебираємо ключі вхідного об'єкта
    for (let key in obj) {
        const value = obj[key];
        // додаємо поточний ключ до шляху до поточної властивості
        let currPath: string = path !== "" ? (path + "/" + key) : key;
        if (typeof value === 'object' && !Array.isArray(value)) {
            // якщо значення поточної властивості є об'єктом та не є масивом,
            // додаємо до об'єкта результатів результат виклику mapObj для цієї властивості
            result={...result, ...mapObj(value, currPath)};
        } else {
            // в іншому випадку додаємо значення поточної властивості
            // до об'єкту результатів, вказавши як ключ, шлях до властивості
            result[currPath] = value;
        }
    }
    return result;
}

const obj = {
    a: {
        b: {
            c: 12,
            d: 'Hello World'
        },
        e: [1,2,3]
    }
};

console.log(mapObject(obj));
