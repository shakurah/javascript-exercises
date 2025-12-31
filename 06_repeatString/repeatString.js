const repeatString = function(string, num) {
    
    if (num < 0){
        return "ERROR";
    }
    repeatstr = "";
    let i = 0;
    while (i < num){
        for (let str of string){
            repeatstr += str;
        }
        i +=1;
    }
    return repeatstr;

};

// Do not edit below this line
module.exports = repeatString;
