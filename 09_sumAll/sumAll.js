function isNonNegativeInt(value){
    return Number.isInteger(value) && value >= 0;
}

const sumAll = function(start, end) {
    let sum = 0;
    if (!isNonNegativeInt(start) || !isNonNegativeInt(end))
    {
        return "ERROR"
    }
    if (start > end){
        mid = start;
        start = end;
        end = mid;
    }
    for (let i=start; i <= end; i++){
        sum += i;
    } 
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
