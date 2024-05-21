const removeFromArray = function(array, ...args) {
    const newArray = [];

    // for each item in the array, push it to a new array if it's not included in the function arguments
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    })

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
