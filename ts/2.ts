type ChunkArrayIterator<T> = {
    next: () => { value: T[] | undefined; done: boolean };
};

function chunkArray<T>(arr: T[], length: number): ChunkArrayIterator<T> {
    // ініціалізуємо початкові значення індексів
    let startIndex = -length;
    let endIndex = 0;

    return {
        next: function(): { value: T[] | undefined; done: boolean } {
            // збільшуємо індекси на значення довжини підмасиву
            startIndex += length;
            endIndex += length;
            if (startIndex < arr.length) {
                // якщо початковий індекс менший ніж довжина масиву - повертаємо підмасив як value та done: false
                return { value: arr.slice(startIndex, endIndex), done: false };
            } else {
                // в іншому випадку повертаємо undefined як value та done: true
                return { value: undefined, done: true };
            }
        }
    };
}

const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())