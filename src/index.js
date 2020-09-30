exports.min = function min(array) {
    if (arguments.length !== 0 && array.length !== 0) {
        return Math.min(...array);
    }
    return 0;
};

exports.max = function max(array) {
    if (arguments.length !== 0 && array.length !== 0) {
        return Math.max(...array);
    }
    return 0;
};

exports.avg = function avg(array) {
    if (arguments.length !== 0 && array.length !== 0) {
        let sum = array.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        );
        return sum / array.length;
    }
    return 0;
};
