function makeAdding (firstNumber) {
    // 'first' is scoped within the makeAdding function
    const first = firstNumber;
    return function resulting (secondNumber) {
        // 'second is scoped within the reulting function
        const second = secondNumber;
        return first + second;
    }
}

// but we've not seen and example of a "function"
// being returned, theus far - how do we use it?

const add5 = makeAdding(5);
console.log(add5(2)) // should log a 7