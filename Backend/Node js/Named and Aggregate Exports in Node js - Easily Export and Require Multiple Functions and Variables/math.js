const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const PI = 3.124;

// module.exports = add;
// module.exports = mul;
/* module.exports is a single object or value.
when you reassign module.exports (e.g. module.exports=add), it completely replaces whatever was previously assigned.
If you reassign it again (module.exports=mul), the previous value (add) is replaced with (mul). */

module.exports.add = add;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;
module.exports.PI = PI;
//or you can write
// module.exports = { add, sub,  mul , div, PI };
