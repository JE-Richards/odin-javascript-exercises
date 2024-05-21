const palindromes = function (string) {
    // only consider alphanumerics
    const alphanum = "abcdefghijklmnopqrstuvwxyz0123456789";

    // convert input to all lowercase
    // remove all non-alphanumerics from the input
    const cleanString = string.toLowerCase().split("").filter((char) => alphanum.includes(char)).join("");

    // reverse string and test

    return cleanString === cleanString.split("").reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
