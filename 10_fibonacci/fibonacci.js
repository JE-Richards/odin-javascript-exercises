const fibonacci = function(n) {
    // check if n is number, if not number convert number. set n to counter
    let counter;
    if (typeof(n) !== "number") {
        counter = parseInt(n);
    }
    else {
        counter = n;
    }

    // if n < 0 OOPS
    if (counter < 0) {
        return "OOPS";
    }
    // else if n == 0 then 1
    if (counter == 0) {
        return 0;
    }
    // initiate element 0 and 1, initiate count
    // if count < n, count ++ and new element = el1+el2, el1 = el2, el2=newel
    let previous = 1;
    let previousTwo = 0;

    for (let i = 2; i <= counter; i++) {
        let current = previous + previousTwo;
        previousTwo = previous;
        previous = current;
    }

    return previous;

};

// Do not edit below this line
module.exports = fibonacci;
