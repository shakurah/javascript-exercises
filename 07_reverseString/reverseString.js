const reverseString = function(str) {
    let reversedstr = "";
    for (let i=str.length-1; i >= 0; i--){
        reversedstr += str[i];
    }
    return reversedstr;
};

// Do not edit below this line
module.exports = reverseString;
