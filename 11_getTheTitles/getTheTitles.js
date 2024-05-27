const getTheTitles = function(arr) {
    let titlesArr = [];
    arr.forEach(element => {
        titlesArr.push(element['title']);
    });
    return titlesArr;
};

// Do not edit below this line
module.exports = getTheTitles;
