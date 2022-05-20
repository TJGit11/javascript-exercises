const reverseString = function(str) {
    // split the string into an array [h, e, l, l, o]
    let splitString = str.split("");
    // reverse the array [o, l, l, e, h]
    let reversed = splitString.reverse();
    // join the array back together "olleh"
    let joined = reversed.join("");
    return joined;

};

// Do not edit below this line
module.exports = reverseString;
