var val;
val = "string value";
val = new Array();
console.log(val instanceof Array);
if (val instanceof Array) {
    val.push(33);
}
console.log(val);
