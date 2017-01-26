/**
 * Create an array with distinct values
 *
 *
 * @param a
 * @return array 
 */

module.exports = {
  distinct: function(a) {
    if (!Array.isArray(a)) throw new Error('Supplied argument is not an array');
    return a.filter(function(item, i, ar) {
      return ar.indexOf(item) === i;
    });
  },
};
