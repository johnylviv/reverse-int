module.exports = function reverse (n) {
  let absNumber = Math.abs(n);             /* convert to abs number*/
  let str = absNumber.toString();          /* convert abs number to string */
  str = str.split("").reverse().join("");  /* reverse string */

  let revNumber = parseInt(str, 10);       /* convert string to Number */
  return revNumber;
}
