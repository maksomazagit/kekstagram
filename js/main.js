// Random numbers function
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    if (max < min) {
        const temp = max;
        max = min;
        min = temp;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Max string length function
function checkMaxLength(str, maxLen) {
    if (str.length <= maxLen) {
        return true;
    } else {
        return false;
    }
}

getRandomInt(2, 15);
checkMaxLength('string', 5);