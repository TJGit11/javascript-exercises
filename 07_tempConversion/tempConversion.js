const ftoc = function(fnum) {
c = Math.round(((fnum - 32) * 5/9) * 10) / 10;
return c;
};

const ctof = function(cnum) {
f = Math.round(((cnum * 9/5) + 32) * 10) / 10;
return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
