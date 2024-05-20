const repeatString = function(input, numRepeat) {
    if (numRepeat < 0) {
        return "ERROR";
    }
    else {
        return input.repeat(numRepeat);
    }
};

// Do not edit below this line
module.exports = repeatString;
