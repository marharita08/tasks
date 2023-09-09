type Primitive = number | string | boolean | null | undefined | symbol | bigint;
function arrayToObject(arr: any[]): null | Record<string, any> {
    // якщо масив пустий повертаємо null
    if (arr.length === 0) {
        return null;
    }
    // створюємо пустий об'єкт
    let obj: Record<string, any> = {};
    // перебираємо кожен елемент вхідного масиву
    for (let i = 0; i < arr.length; i++) {
        // кожен елемент масиву складається з ключа та значення
        let item: [string, Primitive | []] = arr[i];
        // додаємо до об'єкта властивість за ключем з масиву
        // якщо значення є масивом то передаємо його в arrayToObject()
        obj[item[0]] = Array.isArray(item[1]) ? arrayToObject(item[1]) : item[1];
    }
    return obj;
}


let arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];

console.log(arrayToObject(arr));
