const sumAll = function(x, y) {
if (x < 0 || y < 0) return 'ERROR';
if (!Number.isInteger(x) || (!Number.isInteger(y))){
    return 'ERROR';
}

if (x > y) {
    let j = x
    x = y
    y = j
}

let sumxy = 0;
for (let i = x; i < y + 1; i++){
    sumxy += i;
}
return sumxy;
}


// Do not edit below this line
module.exports = sumAll;
