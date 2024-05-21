const sumAll = function(a, b) {
    
    if ((Math.min(a,b) < 0) || typeof(a) != 'number' || typeof(b) != 'number') {
        return "ERROR"
    }
    else {
        // Gauss
        return (((Math.max(a, b) - Math.min(a,b))+1) * (a + b)) / 2;
    }
};

// Do not edit below this line
module.exports = sumAll;
