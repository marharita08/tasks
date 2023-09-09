class ErrorException {
    constructor() {}
}
class NotificationException {
    constructor() {}
}
function primitiveMultiply(a: number, b: number): number {
    const rand: number = Math.random();
    if (rand < 0.5) {
        return a * b;
    } else if(rand > 0.85) {
        throw new ErrorException()
    } else {
        throw new NotificationException()
    }
}

function reliableMultiply(a: number, b: number): number|null {
    // застосовуємо try catch щоб обробити виключення
    try {
        // викликаємо primitiveMultiply
        return primitiveMultiply(a, b);
    } catch (e) {
        if (e instanceof NotificationException) {
            // якщо сталася NotificationException, логуємо її 
            // та викликаємо повторно reliableMultiply
            console.warn('NotificationException');
            return reliableMultiply(a, b);
        } else if (e instanceof ErrorException) {
            // якщо сталась ErrorException логуємо її
            console.error('ErrorException');
        }
    }
    return null;
}

console.log(reliableMultiply(8, 8));
