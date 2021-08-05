exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    return Math.min(...array);
};

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    return Math.max(...array);
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let sum = 0;
        array.reduce(function (accumulator, currentValue) {
            return (sum = accumulator + currentValue);
        });
        return sum / array.length;
    }
};
