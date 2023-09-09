function add(x: number) {
    // створюємо функцію яка додає поточний аргумент до суми попередніх
    function addNext(y: number){
        x += y;
        // повертаємо addNext для наступних викликів
        return addNext;
    }

    // додаємо до addNext метод toString
    // який повертає поточне значення суми аргументів
    addNext.toString = function() {
        return x;
    };

    // повертаємо addNext для наступного виклику
    return addNext;
}


console.log(+add(1)(2));
console.log(+add(1)(2)(5));
console.log(+add(1)(2)(-3)(4));
console.log(+add(1)(2)(3)(4)(-5));
